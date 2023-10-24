import { ReactElement } from "react";
import { Menu } from "@headlessui/react";
import arrowUp from "../assets/iconarrowup.svg";
import arrowDown from "../assets/iconarrowdown.svg";

interface CompanyProps {
  isArrowOpen: boolean;
  arrowHandler: () => void;
}

export default function Company({isArrowOpen, arrowHandler}: CompanyProps): ReactElement {
  return (
    <Menu>
      <Menu as="div">
        <div className="flex items-center gap-x-3 cursor-pointer">
          <Menu.Button
            as="li"
            className="font-Epilogue cursor-pointer hover:text-gray"
            onClick={arrowHandler}
          >
            Company
          </Menu.Button>
          {isArrowOpen ? <img src={arrowDown} /> : <img src={arrowUp} />}
        </div>
        <Menu.Items className="absolute top-14 w-32 py-2 bg-light rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex items-center space-x-5 w-full p-2 px-4">
            <h1 className="font-Epilogue text-base text-gray">History</h1>
          </div>
          <div className="flex items-center space-x-5 w-full p-1 px-4">
            <h1 className="font-Epilogue text-base text-gray">Our Team</h1>
          </div>
          <div className="flex items-center space-x-5 w-full p-2 px-4">
            <h1 className="font-Epilogue text-base text-gray">Blog</h1>
          </div>
        </Menu.Items>
      </Menu>
    </Menu>
  );
}
