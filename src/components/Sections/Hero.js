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
          <div>
            <BackGroundImage
              className="relative h-screen w-screen flex flex-col justify-center items-center"
              fluid={data.heroImage.childImageSharp.fluid}
              alt={data.heroImage.childImageSharp.fluid.originalName}
            >
              <div className="h-screen relative z-30 flex justify-center items-start mt-36 p-8">
                <div className="flex justify-center items-center flex-col flex-wrap">
                  <h3 className="font-monts text-center text-xanadu">
                    Bienvenido a Spa Automotriz
                  </h3>
                  <h1 className="font-montserrat text-center text-white">
                    Consentimos tu auto con el mejor servicio Automotriz
                  </h1>
                </div>
              </div>
              <div className="absolute top-0 h-screen w-screen bg-black opacity-60  text-white"></div>
            </BackGroundImage>
            {/*             <div className="absolute bg-gradient-to-b from-transparent via-black to-bg-black"></div>
             */}{" "}
          </div>
        )}
      />
    </section>
  )
}

export default Hero
