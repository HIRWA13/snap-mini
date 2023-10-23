import { ReactElement } from "react";
import Feature from "./Feature";

export default function Navigation(): ReactElement {
  return (
    <ul className="hidden md:block">
        <Feature/>
    </ul>
  )
}