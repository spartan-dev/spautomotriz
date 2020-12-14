import React, { useState } from "react"
import Image from "../utils/Image"
import Menu from "../../images/svg/menu.svg"
import Close from "../../images/svg/close.svg"
const NavBar = () => {
  const [open, setOpen] = useState(false)
  const mobileNav = () => (
    <nav
      className={`bg-black text-xanadu font-monts text-base tracking-wider 
    pt-8 pr-8 pb-14 pl-14 h-screen w-72 fixed top-0 right-0 z-40 overflow-x-hidden overflow-y-auto
     ${
       open
         ? "transition-all duration-300 ease-in-out translate-x-full"
         : "transition-all duration-300 ease-in-out  translate-x-0"
     }`}
    >
      <div className="">
        <div className="flex flex-row justify-between  items-center w-full mb-16">
          <h3 className="text-yellowGreen mb-0 text-xs  font-montserrat tracking-basic">
            Navegacion
          </h3>
          <Close
            onClick={() => setOpen(!open)}
            className="w-7 h-7 cursor-pointer"
          />
        </div>
        <div className="w-full">
          <ul className="text-white ml-0">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Clients</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  )
  return (
    <header className="absolute z-10  w-full inset-x-0 top-0 h-20 py-4 px-2 bg-transparent  flex justify-between items-center">
      <div className="mt-4 w-36 h-24">
        <Image filename="SPANOBG.png" alt="Spa Automotriz" className="" />
      </div>
      <div className="flex w-auto pr-4 justify-between items-center">
        <span
          className="
         mr-2 
         text-base tracking-basic  
         font-monts text-yellowGreen"
        >
          MENU
        </span>
        <div>
          <Menu
            onClick={() => setOpen(!open)}
            className="w-11 h-11 cursor-pointer"
          />
        </div>
      </div>
      {open ? mobileNav() : null}
    </header>
  )
}

export default NavBar
