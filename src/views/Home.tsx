import React from "react"
import Navbar from "../components/Navbar/Navbar"

import "../styles/home.scss"

const Home = (props: any) => {
  return (
    <div className={`hc-home ${props.theme}`}>
      <div className="hc-body">
        {/** NAVBAR */}
        <Navbar className={`hc-home ${props.theme}`}/>
      </div>
    </div>
  )
}

Home.defaultProps = {
    name:""
}

export default Home