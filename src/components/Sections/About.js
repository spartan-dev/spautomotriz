import React from "react"
import SEO from "../seo"
const About = () => {
  return (
    <section className="h-auto w-screen bg-yellowGreen pt-48 pb-36">
      <SEO title="Acerca de SpAutomotriz" />
      <div className="flex flex-col justify-center items-center   w-full mb-16">
        <h3 className="text-center font-monts tracking-basic text-xl">
          Concepto de Eficiencia
        </h3>
        <h1 className="text-center mt-0 text-4xl font-montserrat  text-white leading-tight">
          Somos SpaAutomotriz
        </h1>
        <div className="border-b-2 border-white opacity-30 w-3/5"></div>
      </div>
      <div className="flex flex-col justify-center items-center w-full mb-12">
        <p className="text-2xl p-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </p>
        <div className="border-b-2 border-white opacity-30 w-3/5"></div>
      </div>
    </section>
  )
}

export default About
