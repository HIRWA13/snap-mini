import { ReactElement } from "react"
import Logo from "../assets/logo"
import IconMenu from "../assets/IconMenu"

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen:boolean) => void;
}

export default function Header({isOpen, setIsOpen}: HeaderProps): ReactElement {
  return (
    <header className="p-4 py-6">
      <div className="flex justify-between">
        <Logo />
        <IconMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
