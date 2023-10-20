import { ReactElement, useState, useRef } from "react";

export default function Sidebar(): ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
  return (
    <section></section>
  )
}