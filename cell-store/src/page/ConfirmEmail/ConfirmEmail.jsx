import React from 'react'
import { useEffect } from 'react'

const ConfirmEmail = () => {
    const email = localStorage.getItem('email_register_')
    console.log("emailk, local storage",email)
   useEffect(() => {
    setTimeout(()=> {
        localStorage.removeItem('email_register_')
    })
   },10000)
  return (
    <div>
      <h1>GRACIAS POR REGISTRARTE</h1>
      <h3>Consulte el correo electrónico de confirmación en: {email === null ? '' : email}</h3>
      <p>Nota: Si no recibe el correo electrónico en unos minutos:</p>
      <p>comprobar la carpeta de correo no deseado</p>
      <p>verificar si escribiste correctamente tu correo electrónico</p>

    </div>
  )
}

export default ConfirmEmail
