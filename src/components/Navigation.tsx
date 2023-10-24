import { ReactElement } from "react";
import Feature from "./Feature";
import Company from "./Company";

export default function Navigation(): ReactElement {
  return (
    <ul className="hidden md:flex items-start gap-x-14">
        <Feature/>
        <Company/>
    </ul>
  )
}