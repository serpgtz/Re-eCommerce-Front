import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { confirmUser } from "../../redux/actions/userActions";

const ConfirmedEmail = () => {
  const dispatch = useDispatch();
  const error_back = useSelector((state) => state.user.error_confirm_token);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    dispatch(confirmUser(id));
    if (error_back.msg.length > 0) {
      setTimeout(() => {
        navigate("/account/login");
      }, 300);
    }
  };

  return (
    <div>
      <h2>¡Confirmación exitosa!</h2>
      <h1>
        Gracias por registrarte en nuestro sitio web. Esperamos que la
        experiencia sea extraordinaria
      </h1>
      {error_back.msg ? (
        <h2>TOKEN NO VÁLIDO</h2>
      ) : (
        <button onClick={handleOnClick}>Procede a tu cuenta</button>
      )}
    </div>
  );
};

export default ConfirmedEmail;
