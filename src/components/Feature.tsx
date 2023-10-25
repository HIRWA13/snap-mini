import { ReactElement, useState } from "react";
import { Menu } from "@headlessui/react";
import planning from "../assets/iconplanning.svg";
import todo from "../assets/icontodo.svg";
import calendar from "../assets/iconcalendar.svg";
import reminders from "../assets/iconreminders.svg";
import arrowUp from "../assets/iconarrowup.svg";
import arrowDown from "../assets/iconarrowdown.svg";

export default function Feature(): ReactElement {
  const [isFeatureArrowDown, setIsFeatureArrowDown] = useState(true);
  const featureArrowHandler = () => {
    setIsFeatureArrowDown(!isFeatureArrowDown);
  };
  return (
    <Menu as="div">
      <div className="flex items-center gap-x-3 cursor-pointer">
        <Menu.Button
          as="li"
          className="font-Epilogue cursor-pointer hover:text-gray"
          onClick={featureArrowHandler}
        >
          Feature
        </Menu.Button>
        {isFeatureArrowDown ? <img src={arrowDown} /> : <img src={arrowUp} />}
      </div>
      <Menu.Items className="absolute left-20 top-14 w-40 outline-none bg-light rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-5 w-full p-2 px-5">
            <img src={todo} />
            <h1 className="font-Epilogue text-base text-gray">Todo List</h1>
          </div>
          <div className="flex items-center space-x-4 w-full p-2 px-5">
            <img src={calendar} />
            <h1 className="font-Epilogue text-base text-gray">Calendar</h1>
          </div>
          <div className="flex items-center space-x-5 w-full p-2 px-5">
            <img src={reminders} />
            <h1 className="font-Epilogue text-base text-gray">Remiders</h1>
          </div>
          <div className="flex items-center space-x-4 w-full p-2 px-5">
            <img src={planning} />
            <h1 className="font-Epilogue text-base text-gray">Planning</h1>
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}
