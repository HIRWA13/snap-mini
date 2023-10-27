import { ReactElement } from "react"
import IconMenu from "../assets/IconMenu"
import LoginSignUp from "./LoginSignUp"
import Navigation from "./Navigation"
import Logo from "../assets/Logo"

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen:boolean) => void;
}

export default function Header({isOpen, setIsOpen}: HeaderProps): ReactElement {
  return (
    <header className="p-4  py-6 md:py-3 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex space-x-10">
          <Logo />
          <Navigation />
        </div>
        <IconMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <LoginSignUp />
      </div>
    </header>
  );
}
