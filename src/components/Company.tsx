import { ReactElement } from "react";
import { Menu } from "@headlessui/react";

export default function Company(): ReactElement {
  return (
    <Menu>
      <Menu as="div">
        <Menu.Button
          as="li"
          className="font-Epilogue cursor-pointer"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Company
        </Menu.Button>
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
