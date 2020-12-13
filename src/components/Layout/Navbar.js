import React, { useState } from "react"
import Image from "../utils/Image"
import Menu from "../../images/svg/menu.svg"
const NavBar = () => {
  const [open, setOpen] = useState(false)
  const mobileNav = () => {}
  return (
    <header className="absolute z-10 fixed w-full inset-x-0 top-0 h-20 py-4 px-2 bg-transparent  flex justify-between items-center">
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
          <Menu className="w-11 h-11" />
        </div>
      </div>
    </header>
  )
}

export default NavBar
