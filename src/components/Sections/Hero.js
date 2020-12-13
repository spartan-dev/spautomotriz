import React from "react"
import BackGroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"

const Hero = () => {
  return (
    <section className="relative">
      <StaticQuery
        query={graphql`
          query {
            heroImage: file(relativePath: { regex: "/spabigback.jpg/" }) {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        `}
        render={data => (
          <section>
            <BackGroundImage
              className="relative h-screen w-screen flex flex-col justify-center items-center"
              fluid={data.heroImage.childImageSharp.fluid}
              alt={data.heroImage.childImageSharp.fluid.originalName}
            ></BackGroundImage>
            <div className="absolute top-0 h-screen w-screen bg-black opacity-40"></div>
            {/*             <div className="absolute bg-gradient-to-b from-transparent via-black to-bg-black"></div>
             */}{" "}
            <div className=" relative z-30 flex justify-center items-center p-8">
              <div className="flex justify-center items-center flex-col flex-wrap">
                <h3 className="font-monts text-center text-cultured">
                  Bienvenido a Spa Automotriz
                </h3>
                <h1 className="font-montserrat text-center text-culterd">
                  Consentimos tu auto con el mejor servicio Automotriz
                </h1>
              </div>
            </div>
          </section>
        )}
      />
    </section>
  )
}

export default Hero
