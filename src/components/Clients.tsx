import { ReactElement } from "react";
import ClientAudioPhile from "../assets/ClientAudioPhile.svg";
import ClientDataBiz from "../assets/ClientDataBiz.svg";
import ClientMaker from "../assets/ClientMaker.svg";
import ClientMeet from "../assets/ClientMeet.svg";

export default function Clients(): ReactElement {
  return (
    <div className="flex items-center justify-between px-4 gap-2">
      <img src={ClientDataBiz}/>
      <img src={ClientAudioPhile}/>
      <img src={ClientMeet}/>
      <img src={ClientMaker}/>
    </div>
  );
}