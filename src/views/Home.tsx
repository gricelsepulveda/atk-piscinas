import React, {useState} from "react"
import Navbar, { NavbarProps } from "../components/Navbar/Navbar"
import Inicio from "./Inicio"
import Catalogo from "./Catalogo"
import Servicios from "./Servicios"
import Clientes from "./Clientes"
import Contacto from "./Contacto"
import Footer from "./Footer"

import "../styles/home.scss"

const setLinks = {
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
  const [open, setOpen] = useState(false)
  return (
    <div className="atk-home">
      <div className="atk-body">
        <a href="#inicio" className="atk-brand-logo">
          <img src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-logo.svg"/>
        </a>
        <button className="atk-mobile-button" type="button" onClick={() => setOpen(!open)}></button>
        {/** NAVBAR */}
        <Navbar links={setLinks.links} open={open}/>
        <Inicio/>
        <Catalogo/>
        <Servicios/>
        <Clientes/>
        <Contacto/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home