import React from "react"
import Button from "../components/Button/Button"

import "../styles/home.scss"

const Inicio:React.FunctionComponent = () => {

  const goToContact = (event:string) => {

  }

  return (
    <section className="atk-inicio">
      <img 
        src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-piscina.svg"
        className="atk-inicio-piscina"
        alt="piscina atk"
        title="psicina atk"
      />
      <div className="flex col center atk-titles">
        <img src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-divider.svg" className="atk-divider"/>
        <h1>Crea momentos inolvidables, en tu espacio</h1>
        <span>Piscinas grandes, pequeñas, redondas, cuadradas, personalizadas</span>
        <Button
                width="auto"
                name="go-to-contact-index"
                kind="default"
                size={{size: "lg"}}
                disabled={false}
                color={{color: "color-3"}}
                value="tenemos una para ti"
                onclick={() => goToContact("onclick")}
                onmouseout={() => undefined}
                onmouseover={() => undefined}
                active={false}
                icon={undefined}

        />
      </div>
    </section>
  )
}

export default Inicio