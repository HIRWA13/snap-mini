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
      <Menu.Button className="font-Epilogue text-xl" onClick={()=> {console.log("clicked")}}>Feature</Menu.Button>
      <Menu.Items className="absolute left-20 w-40 bg-light rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex items-center space-x-5 w-full p-2">
          <img src={todo} />
          <h1>Todo List</h1>
        </div>
        <div className="flex items-center space-x-5 w-full p-2">
          <img src={calendar} />
          <h1>Calendar</h1>
        </div>
        <div className="flex items-center space-x-5 w-full p-2">
          <img src={reminders} />
          <h1>Remiders</h1>
        </div>
        <div className="flex items-center space-x-5 w-full p-2">
          <img src={planning} />
          <h1>Planning</h1>
        </div>
      </Menu.Items>
    </Menu>
  );
}