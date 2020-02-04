import React from "react"
import Button from "../components/Button/Button"

const Servicios:React.FunctionComponent = () => {
  const goToContact = (event:string) => {
  }
  return (
    <section className="atk-services">
      <img 
        src="https://triggerlab.sfo2.digitaloceanspaces.com/atk/atk-piscina-servicios.svg"
        className="atk-servicio-piscina"
        alt="piscina atk"
        title="psicina atk"
      />
      <h2 className="atk-titles black">Catálogo</h2>
      <div className="flex col end atk-service-description">
        <p>Además de nuestros servicios de instalación y venta de piscinas realizamos asesorías previas a la construcción (estudio de viabilidad de tu proyecto) así como también reparación y mantención de pisicinas en fibra.</p>
        <Button
              width="auto"
              name="go-to-contact-index"
              kind="default"
              size={{size: "lg"}}
              disabled={false}
              color={{color: "color-2"}}
              value="Cotiza aquí"
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

export default Servicios