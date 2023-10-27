import { ReactElement } from "react";
import Clientaudiophile from "../assets/clientaudiophile";
import Clientdatabiz from "../assets/clientdatabiz";
import Clientmaker from "../assets/clientmaker";
import Clientmeet from "../assets/clientmeet";

export default function Clients(): ReactElement {
  return (
    <section className="flex items-center justify-between py-2 gap-2 md:p-0 md:gap-3 md:justify-start md:gap-x-10">
      <Clientaudiophile />
      <Clientdatabiz />
      <Clientmaker />
      <Clientmeet />
    </section>
  );
}
