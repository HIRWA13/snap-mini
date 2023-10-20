import { ReactElement } from "react"
import { useState, useRef } from "react";

import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App():ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main />
      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default App
