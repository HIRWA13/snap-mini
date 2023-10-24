import { ReactElement } from "react";
import { Menu } from "@headlessui/react";

export default function Company(): ReactElement {
  return (
    <Menu>
      <Menu as="div">
        <Menu.Button
          className="font-Epilogue text-xl"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Company
        </Menu.Button>
        <Menu.Items className="absolute w-32 bg-light rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex items-center space-x-5 w-full p-2">
            <h1>History</h1>
          </div>
          <div className="flex items-center space-x-5 w-full p-2">
            <h1>Our Team</h1>
          </div>
          <div className="flex items-center space-x-5 w-full p-2">
            <h1>Blog</h1>
          </div>
        </Menu.Items>
      </Menu>
    </Menu>
  );
}
