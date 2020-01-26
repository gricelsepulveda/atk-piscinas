import React from "react"

import "./navbar.scss"

export interface NavLink {
  link: {
    name: string,
    url: string,
    active: boolean
  }
}

export interface NavbarProps {
  links: NavLink[]
}

const Navbar:React.FunctionComponent<NavbarProps> = (props) => {
  return (
    <div className={`atk-navbar`}>
      <img src="" className="atk-brand-logo"/>
      <div className="flex row start">
      </div>
      <h1></h1>
    </div>
  )
}


export default Navbar