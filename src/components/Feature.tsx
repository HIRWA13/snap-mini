import { ReactElement } from "react";
import { Menu } from "@headlessui/react";
import planning from "../assets/iconplanning.svg"
import todo from "../assets/icontodo.svg"
import calendar from "../assets/iconcalendar.svg"

export default function Feature(): ReactElement {
  return (
    <Menu as="div">
      <Menu.Button className="font-Epilogue text-xl">Feature</Menu.Button>
      <Menu.Items>
        <div className="flex space-x-5">
          <img src={todo} />
          <h1>Todo List</h1>
        </div>
        <div className="flex space-x-5">
          <img src={calendar} />
          <h1>Calendar</h1>
        </div>
        <div className="flex space-x-5">
          <img src={planning} />
          <h1>Planning</h1>
        </div>
      </Menu.Items>
    </Menu>
  );
}