import { ReactElement } from "react";
import { Menu } from "@headlessui/react";
import planning from "../assets/iconplanning.svg"
import todo from "../assets/icontodo.svg"
import calendar from "../assets/iconcalendar.svg"
import reminders from "../assets/iconreminders.svg"

export default function Feature(): ReactElement {
  return (
    <Menu as="div">
      <Menu.Button className="font-Epilogue text-xl">Feature</Menu.Button>
      <Menu.Items className="absolute bg-light px-2 w-36 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="py-2 flex items-center space-x-5">
          <img src={todo} />
          <h1>Todo List</h1>
        </div>
        <div className="py-2 flex items-center space-x-5">
          <img src={calendar} />
          <h1>Calendar</h1>
        </div>
        <div className="py-2 flex items-center space-x-5">
          <img src={reminders} />
          <h1>Remiders</h1>
        </div>
        <div className="py-2 flex items-center space-x-5">
          <img src={planning} />
          <h1>Planning</h1>
        </div>
      </Menu.Items>
    </Menu>
  );
}