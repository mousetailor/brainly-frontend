import { Logo } from "../icons/logo";
import { TwitterIcon } from "../icons/twitter";
import { YoutubeIcon } from "../icons/youtubeicon";
import { SideBarItem } from "./sidebarItems";
export function Sidebar(){
  return <div className="pl-4 h-screen bg-white border-r w-72 fixed lef-0 top-0">
    <div className="flex text-2xl pt-4">
      <div className="pr-2 text-purple-600">
        <Logo />
      </div>
      Brainly
    </div>
     <div className="pt-4">
      <SideBarItem icon={<TwitterIcon />} text ="Twitter"/>
      <SideBarItem icon={<YoutubeIcon />} text ="Youtube" />
    </div>
  </div>
}
