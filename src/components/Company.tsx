import { ReactElement, useState } from "react";
import { Menu } from "@headlessui/react";
import arrowUp from "../assets/iconarrowup.svg";
import arrowDown from "../assets/iconarrowdown.svg";


export default function Company(): ReactElement {
  const [isCompanyArrowDown, setIsCompanyArrowDown] = useState(true);
  const companyArrowHandler = () => {
    setIsCompanyArrowDown(!isCompanyArrowDown);
  }
  return (
    <Menu>
      <Menu as="div">
        <div className="flex items-center gap-x-3 cursor-pointer">
          <Menu.Button
            as="li"
            className="font-Epilogue cursor-pointer hover:text-gray"
            onClick={companyArrowHandler}
          >
            Company
          </Menu.Button>
          {isCompanyArrowDown ? <img src={arrowDown} /> : <img src={arrowUp} />}
        </div>
        <Menu.Items className="absolute top-14 w-32 py-2 outline-none bg-light rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
