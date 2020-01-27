import React from "react"
import Navbar, { NavbarProps } from "../components/Navbar/Navbar"
import Inicio from "./Inicio"
import Catalogo from "./Catalogo"

import "../styles/home.scss"

const setLinks:NavbarProps = {
  links: [
    {
      name: "inicio",
      url: "#inicio",
      active: true
    },
    {
      name: "catálogo",
      url: "#catalogo",
      active: false
    },
    {
      name: "servicios",
      url: "#servicios",
      active: false
    },
    {
      name: "clientes",
      url: "#clientes",
      active: false
    },
    {
      name: "contacto",
      url: "#contacto",
      active: false
    },
    {
      name: "nosotros",
      url: "#nosotros",
      active: false
    },
  ]
}


const Home:React.FunctionComponent = () => {
  return (
    <div className="atk-home">
      <div className="atk-body">
        {/** NAVBAR */}
        <Navbar links={setLinks.links} />
        <Inicio/>
        <Catalogo/>
      </div>
    </div>
  )
}

export default Home