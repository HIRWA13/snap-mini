import { ReactElement } from "react";

type IconMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen:boolean) => void;
}

export default function IconMenu({isOpen, setIsOpen}: IconMenuProps):ReactElement {
  return (
    <div 
        className="cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
    >
      <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
        <g fill="#151515" fillRule="evenodd">
          <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
        </g>
      </svg>
    </div>
  );
}
