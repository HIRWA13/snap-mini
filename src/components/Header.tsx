import { ReactElement } from "react"
import Logo from "../assets/logo"
import IconMenu from "../assets/IconMenu"

export default function Header(): ReactElement {
  return (
    <header className="p-4 py-6">
      <div className="flex justify-between">
        <Logo />
        <IconMenu />
      </div>
    </header>
  );
}
