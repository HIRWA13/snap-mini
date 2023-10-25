import { ReactElement} from "react";
import Feature from "./Feature";
import Company from "./Company";

export default function Navigation(): ReactElement {

  return (
    <ul className="hidden md:flex items-start gap-x-14">
        <li>
          <Feature />
        </li>
      <li>
        <Company />
      </li>
      <li className="font-Epilogue cursor-pointer hover:text-gray">Careers</li>
      <li className="font-Epilogue cursor-pointer hover:text-gray">About</li>
    </ul>
  );
}
