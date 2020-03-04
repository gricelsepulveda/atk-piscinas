import React, { useState } from "react"
import Button from "../components/Button/Button"

const Contacto:React.FunctionComponent = () => {

  const [mail, setMail] = useState({
      nombre: '',
      email: '',
      message: '',
  });

  const goToContact = () => {
    const data = new FormData()
    data.append('mensaje',mail.message);
    data.append('email',mail.email);
    data.append('nombre',mail.nombre);
    fetch('https://www.piscinasatk.cl/contact.php',{
      method: 'POST',
      body: data
    }).then(function(response){
      if(response.ok){
        console.log('email enviado con exito');
      }else{
        console.log('error al enviar email');
      }
    })
    .then(function(texto) {
      console.log(texto);
    })

  }
  const handleChange = (event:any) => {
    if(event.target.name == 'email'){
      setMail({
        nombre: mail.nombre,
        email: event.target.value,
        message: mail.message
      })
      console.log(mail)
    }
    if(event.target.name == 'nombre'){
      setMail({
        nombre: event.target.value,
        email: mail.email,
        message: mail.message
      }) 
      console.log(mail)
    }
    if(event.target.name == 'message'){
      setMail({
        nombre: mail.nombre,
        email: mail.email,
        message: event.target.value
      }) 
      console.log(mail)
    }
  }


  return (
    <section className="atk-contact" id="contacto">
      <h1>Contacto</h1>
      <form>
        <label>Nombre:</label>
        <input name="nombre" type="text" onChange={handleChange} placeholder="Nombre"/>
        <label>Correo:</label>
        <input name="email" type="email" onChange={handleChange} placeholder="Correo"/>
        <label>Mensaje:</label>
        <textarea name="message" onChange={handleChange}/>
        <Button
                width="auto"
                name="go-to-contact-index"
                kind="default"
                size={{size: "lg"}}
                disabled={false}
                color={{color: "color-3"}}
                value="enviar"
                onclick={() => goToContact()}
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