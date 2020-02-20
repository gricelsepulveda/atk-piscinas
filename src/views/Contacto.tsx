import React from "react"
import Button from "../components/Button/Button"

const Contacto:React.FunctionComponent = () => {

  const goToContact = (event:string) => {

  }


  return (
    <section className="atk-contact" id="contacto">
      <h1>Contacto</h1>
      <form>
        <label>Nombre:</label>
        <input type="text" placeholder="Nombre"/>
        <label>Correo:</label>
        <input type="text" placeholder="Correo"/>
        <label>Mensaje:</label>
        <textarea/>
        <Button
                width="auto"
                name="go-to-contact-index"
                kind="default"
                size={{size: "lg"}}
                disabled={false}
                color={{color: "color-3"}}
                value="enviar"
                onclick={() => goToContact("onclick")}
                onmouseout={() => undefined}
                onmouseover={() => undefined}
                active={false}
                icon={undefined}

        />
      </form>
    </section>
  )
}

export default Contacto