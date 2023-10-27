import { ReactElement } from "react";

export default function Clients(): ReactElement {
  return (
    <section className="flex items-center justify-between gap-3 md:justify-start md:gap-x-10">
      <img className="h-5" src="/src/assets/clientdatabiz.svg" />
      <img className="h-5" src="/src/assets/clientaudiophile.svg" />
      <img className="h-5" src="/src/assets/clientmaker.svg" />
      <img className="h-5" src="/src/assets/clientmeet.svg" />
    </section>
  );
}