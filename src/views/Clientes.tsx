import React from "react"

const Clientes:React.FunctionComponent = () => {
  return (
    <section className="atk-clients">
      <h1>Clientes Satisfechos</h1>
      <ul className="flex row center atk-clients-wrapper">
        <li className="atk-client">
          <figure className="atk-client-img" style={{ backgroundImage: "url('http://placekitten.com/g/200/200')"}}>
          </figure>
          <div className="atk-client-description">
            <h3>Lorem ipsum</h3>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisipsum dolor sit amet.</p>
          </div>
        </li>
        <li className="atk-client">
          <figure className="atk-client-img" style={{ backgroundImage: "url('http://placekitten.com/g/200/200')"}}>
          </figure>
          <div className="atk-client-description">
            <h3>Lorem ipsum</h3>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisipsum dolor sit amet.</p>
          </div>
        </li>
        <li className="atk-client">
          <figure className="atk-client-img" style={{ backgroundImage: "url('http://placekitten.com/g/200/200')"}}>
          </figure>
          <div className="atk-client-description">
            <h3>Lorem ipsum</h3>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisipsum dolor sit amet.</p>
          </div>
        </li>
      </ul>
      <img src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-divider.svg" className="atk-divider"/>
      <img src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-wave-2.svg" className="atk-contact-wave"/>
    </section>
  )
}

export default Clientes