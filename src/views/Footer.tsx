import React from "react"

const Footer:React.FunctionComponent = () => {
  return (
    <section className="atk-footer flex row center" id="nosotros">
      <div className="flex col center section" style={{width: "35%", marginLeft: "20px"}}>
        <a href="inicio" className="atk-logo">
          <img src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-logo.svg"/>
        </a>
        <p>
          Atk Piscinas es una empresa que nace en el año Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
      <div className="flex col center section" style={{width: "35%"}}>
        <h2>Síguenos en nuestras redes</h2>
        <div className="flex row center">
          <a href="inicio" className="facebook">
            <img src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-facebook.svg"/>
          </a>
          <a href="inicio" className="instagram">
            <img src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-instagram.svg"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer