import { ReactElement, useState } from "react";
import Feature from "./Feature";
import Company from "./Company";

export default function Navigation(): ReactElement {
    const [isArrowOpen, setIsArrowOpen] = useState(false);
    const arrowHandler = () => {
        setIsArrowOpen(!isArrowOpen);
    }
  return (
    <ul className="hidden md:flex items-start gap-x-14">
      <li>
        <Feature arrowHandler={arrowHandler} isArrowOpen={isArrowOpen} />
      </li>
      <li>
        <Company arrowHandler={arrowHandler} isArrowOpen={isArrowOpen}/>
      </li>
      <li className="font-Epilogue cursor-pointer hover:text-gray">Careers</li>
      <li className="font-Epilogue cursor-pointer hover:text-gray">About</li>
    </ul>
  );
}