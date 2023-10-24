import { ReactElement, useState } from "react";
import { Menu } from "@headlessui/react";
import planning from "../assets/iconplanning.svg"
import todo from "../assets/icontodo.svg"
import calendar from "../assets/iconcalendar.svg"
import reminders from "../assets/iconreminders.svg"

export default function Feature(): ReactElement {
  const [isArrowOpen, setIsArrowOpen] = useState(false)
  return (
    <Menu as="div">
      <Menu.Button as="li"
        className="font-Epilogue cursor-pointer"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Feature
      </Menu.Button>
      <Menu.Items className="absolute left-20 w-40 bg-light rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
       <div className="flex flex-col items-center justify-center">
         <div className="flex items-center space-x-5 w-full p-2">
          <img src={todo} />
          <h1 className="font-Epilogue text-base">Todo List</h1>
        </div>
        <div className="flex items-center space-x-4 w-full p-2">
          <img src={calendar} />
          <h1 className="font-Epilogue text-base">Calendar</h1>
        </div>
        <div className="flex items-center space-x-5 w-full p-2">
          <img src={reminders} />
          <h1 className="font-Epilogue text-base">Remiders</h1>
        </div>
        <div className="flex items-center space-x-4 w-full p-2">
          <img src={planning} />
          <h1 className="font-Epilogue text-base">Planning</h1>
        </div>
       </div>
      </Menu.Items>
    </Menu>
  );
}