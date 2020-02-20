import React, {useState, useEffect} from "react"
import "./navbar.scss"

export interface NavLink {
  name: string,
  url: string,
  active: boolean
}

export interface NavbarProps {
  links: NavLink[],
  open: boolean
}

const Navbar:React.FunctionComponent<NavbarProps> = (props) => {
  const [links, setLinks] = useState(props.links)
  const [active, setActive] = useState(0)
  let _links = links

  const handleLink = (key: number) =>  {
    _links.map((ele) => {
      ele.active = false
    })
    _links[key].active = true
    setLinks(_links)
    setActive(key)
  }

  useEffect(() => {
  }, [active])


  return (
    <nav className={`atk-navbar ${props.open == true ? "active" : ""}`}>
      <ul className="atk-nav-links">
        {
          links.map((item, index) => (
            <li 
              onClick={() => handleLink(index)}
              className={`atk-nav-link ${item.active ? "active" : ""}`}
              key={`atk-link-${item.url}-${index}`}
            >
              <a href={item.url}>
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>
      <a href="#inicio" className="atk-brand-logo">
        <img src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-logo.svg"/>
      </a>
    </nav>
  )
}

export default Navbar