import { ReactElement } from "react"
import { Sidebar } from "flowbite-react"
import Todo from "../assets/icontodo.svg"
import Calendar from "../assets/iconcalendar.svg"
import Reminders from "../assets/iconreminders.svg"
import Planning from "../assets/iconplanning.svg"

export default function MultiLevelDropdown():ReactElement {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse as="div" label="Feacture" className="font-Epilogue">
            <Sidebar.Item href="#">
              <div className="py-2 flex items-center space-x-3">
                <img src={Todo} alt="drop down content"/>
                <h1>Products</h1>
              </div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div className="flex items-center space-x-3">
                <img src={Calendar}alt="drop down content" />
                <h1>Products</h1>
              </div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div className="flex items-center space-x-3">
                <img src={Reminders} alt="drop down content"/>
                <h1>Products</h1>
              </div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div className="flex items-center space-x-3">
                <img src={Planning} alt="drop down content"/>
                <h1>Products</h1>
              </div>
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse as="div" label="Company" className="font-Epilogue">
            <Sidebar.Item href="#">
              <div className="flex items-center space-x-3">
                <h1>History</h1>
              </div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div className="flex items-center space-x-3">
                <h1>Our Team</h1>
              </div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div className="flex items-center space-x-3">
                <h1>Blog</h1>
              </div>
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item href="#"as="div" className="mt-3">
            <div className="space-y-4 flex flex-col">
              <button className="font-Epilogue font-medium cursor-pointer">
                Login
              </button>
              <button className="py-2 px-7 border-2 rounded-xl font-Epilogue font-medium hover:bg-dark hover:text-light transition-all duration-200">
                Register
              </button>
            </div>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
