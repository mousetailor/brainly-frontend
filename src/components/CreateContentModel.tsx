import { useRef, useState } from "react";
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./button";
import type { Input } from "./input";
import axios from "axios";
import { BACKEND_URl } from "../config";


enum ContentType{
  Youtube = "youtube",
  Twitter = "twitter"
}

export function CreateContentModal({open, onClose}:{open:boolean; onClose:()=> void}){

const titleRef = useRef<HTMLInputElement>();
const linkRef = useRef<HTMLInputElement>();
const [type,setType]= useState(ContentType.Youtube)

async function addContent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URl}/api/v1/content`,{
      link,
      type,
      title
    },{
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })
    onClose();
  }


  return ( 
    <div> 
      {open && <div className="w-screen h-screen bg-slate-200 flex justify-center fixed top-0 left-0 opacity-60">
        <div className="flex flex-col justify-centre">
          <span className="bg-white opacity-100 p-4 rounded">
            <div className="flex justify-end">
              <div onClick={onClose} className="cursor-pointer">
                <CrossIcon /> 
              </div>
            </div>
            <div>
              <Input reference={titleRef} placeholder="Title" />
              <Input reference={linkRef} placeholder="Link" /> 
            </div>
            <div>
              <h1>Type</h1>
              <div className="flex gap-1 p-4">
              <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={()=>{
                setType(ContentType.Youtube)
              }}></Button>
              <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={()=>{
                setType(ContentType.Twitter)
              }}></Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Button onClick={addContent} variant="primary" text="Submit" size={"sm"} />
            </div>
          </span>
        </div>  
       </div> }
    </div>

  )}
