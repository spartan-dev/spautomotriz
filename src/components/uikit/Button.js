import React from "react"

const Buton = ({ text }) => {
  return (
    <button
      className="h-16 mb-8 bg-transparent px-10 font-monts text-lg uppercase 
    cursor-pointer text-cultured tracking-basic
   border-solid border-2  border-white transition duration-500 ease-in-out hover:text-black hover:bg-white "
    >
      <span>{text}</span>
    </button>
  )
}

export default Buton
