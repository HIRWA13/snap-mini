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
          <Sidebar.Collapse as="div" label="E-commerce">
            <Sidebar.Item href="#">
              <div className="py-2 flex items-center space-x-3">
                <img src={Todo} />
                <h1>Products</h1>
              </div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div className="py-2 flex items-center space-x-3">
                <img src={Calendar} />
                <h1>Products</h1>
              </div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div className="py-2 flex items-center space-x-3">
                <img src={Reminders} />
                <h1>Products</h1>
              </div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div className="py-2 flex items-center space-x-3">
                <img src={Planning} />
                <h1>Products</h1>
              </div>
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item href="#">
            <p>Products</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
