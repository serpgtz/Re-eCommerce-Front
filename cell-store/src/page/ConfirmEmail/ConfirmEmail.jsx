import React from "react";
import { useEffect } from "react";

const ConfirmEmail = () => {
  const email = localStorage.getItem("email_register_");

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("email_register_");
    });
  }, 10000);
  return (
    <div>
      <h1>GRACIAS POR REGISTRARTE</h1>
      <h3>
        Consulte el correo electrónico de confirmación en:{" "}
        {email === null ? "" : email}
      </h3>
      <p>Nota: Si no recibe el correo electrónico en unos minutos:</p>
      <p>
        compruebe su carpeta de <italic>Spam</italic> o{" "}
        <italic>Correo no deseado</italic>{" "}
      </p>
      <p>verificar si escribiste correctamente tu correo electrónico</p>
    </div>
  );
};

export default ConfirmEmail;
