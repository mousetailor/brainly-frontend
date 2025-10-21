import { useEffect, useState } from 'react'
import './App.css'
import { Button } from '../components/button'
import { Card } from '../components/card'
import { CreateContentModal } from '../components/CreateContentModel'
import { Plusicon } from '../icons/plusicon'
import { ShareIcon } from '../icons/shareicon'
import { Sidebar } from '../components/sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URl } from '../config'

export function Dashboard() {
const [modalOpen, setModalOpen] = useState(false);
  const [contents, refresh] = useContent();
  
  useEffect(()=>{
    refresh();
  },[modalOpen])

  return (
    <>
      <Sidebar />
    <div className='p-4 ml-72 h-min-screen bg-gray-100 border-2'>
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false);
      }} />
      <Button onClick={()=>{
        setModalOpen(true)
      }} startIcon={<Plusicon size='sm' />} size="sm" variant="primary" text="Add Content" />
      <Button onClick={async ()=>{
          const response = await axios.post(`${BACKEND_URl}/api/vi/brain/share`,{
            share:true
          },{
              headers:{
                "Authorization": localStorage.getItem("token")
              }
            });
          const shareUrl = `https://localhost:5137/share${response.data.hash}`
          alert(shareUrl);
        }} startIcon={<ShareIcon />} size="md" variant="secondary" text="Share" />

     <div className='flex gap-4 flex-wrap'>
          {contents.map(({type,link,title})=> <Card type={type} link={link} title={title} />)}
        </div>

    </div>
    </>
  )

}
