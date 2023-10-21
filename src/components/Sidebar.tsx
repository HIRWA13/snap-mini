import { ReactElement } from "react";
import close from "../assets/iconclosemenu.svg"

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({isOpen, setIsOpen}: SidebarProps): ReactElement {
  return (
    <section className="text-center flex p-4 w-full absolute top-0 right-0 h-screen">
      <div className="bg-dark h-full w-full flex-1 fixed top-0 left-0 opacity-80">
        .
      </div>
      <div className="w-4/6 fixed flex-col bg-light opacity-100 top-0 right-0 h-full">
        <div className="p-2">
          <img
            src={close}
            className="fixed top-5 right-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="mt-14 w-full h-full">
          mobile content here
        </div>
      </div>
    </section>
  );
}