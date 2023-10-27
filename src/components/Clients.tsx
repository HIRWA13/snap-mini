import { ReactElement } from "react";
import clientaudiophile from "/src/assets/clientaudiophile.svg";
import clientdatabiz from "/src/assets/clientdatabiz.svg";
import clientmaker from "/src/assets/clientmaker.svg";
import clientmeet from "/src/assets/clientmeet.svg";

export default function Clients(): ReactElement {
  return (
    <section className="flex items-center justify-between gap-3 md:justify-start md:gap-x-10">
      <img className="h-5" src={clientdatabiz}/>
      <img className="h-5" src={clientaudiophile}/>
      <img className="h-5" src={clientmeet}/>
      <img className="h-5" src={clientmaker}/>
    </section>
  );
}