import { ReactElement } from "react"
import Logo from "../assets/logo"
import IconMenu from "../assets/IconMenu"
import LoginSignUp from "./LoginSignUp"

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen:boolean) => void;
}

export default function Header({isOpen, setIsOpen}: HeaderProps): ReactElement {
  return (
    <header className="p-4 py-6 md:py-3">
      <div className="flex items-center justify-between">
        <Logo />
        <IconMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <LoginSignUp />
      </div>
    </header>
  );
}
