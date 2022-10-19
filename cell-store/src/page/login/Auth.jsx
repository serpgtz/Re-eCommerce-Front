import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./Auth.module.css";
import icon_eyes_on from "../../image/show.png";
import icon_eyes_off from "../../image/hide.png";
import { getUserData, userLogin } from "../../redux/actions/userActions";
//import Alert from "../../components/alert/Alert";
import jwt_decode from "jwt-decode";
import ForgotPassword from "../../components/forgotPassword/ForgotPassword";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle'

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  //const [error , setError] = useState({})
  const [active, setActive] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const error_back = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);

  const handleResponseGoogle = (response) => {
    console.log('jwt =>' + response.credential)
    localStorage.setItem('user_google', JSON.stringify(jwt_decode(response.credential)))
  }
  useEffect(() => {
    google.accounts.id.initialize({
      // client_id: '2890899428-u9cjg4ihv7m8i9es40sb2quegdbqm0c3.apps.googleusercontent.com',
      client_id: import.meta.env.VITE_GOGLE_BACK,
      callback: handleResponseGoogle
    })

    google.accounts.id.renderButton(
      document.getElementById("singInDiv"),
      { theme: "outline", size: "large" }
    )
    if (Object.keys(token).length > 0) {
      dispatch(getUserData());
      return navigate('/')
    }
  }, [dispatch, token])
  console.log(token)


  const handleOnChange = (evt) => {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value,
    });

  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
  };


  const handleOnClick = () => {
    setActive(!active)
 
  
  }
 
  console.log(error_back)
  return (
    
    <div className={style.container}>
      {error_back.msg  &&  <Stack sx={{ width: '25%' }} spacing={2}>
      <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  {error_back.msg}<strong>
 ¡Échale un vistazo!</strong>
</Alert>
    
    </Stack>
      
      
     }
    {active && <ForgotPassword setActive={setActive} active={active}/>}
      <div className={style.form_login}>

        {/* <div className={style.divcerrar}>
          <Link to="/">
            <button className={style.cerrar}  >x</button>
          </Link>

        </div> */}
        <form onSubmit={handleOnSubmit} >
          <h2>Iniciar Sesión</h2>
          <div className={style.div_form}>
            <label>Nombre</label>
            <input
              className={style.input}
              type="text"
              name="username"
              placeholder=" Ingrese su nombre"
              onChange={handleOnChange}
            ></input>
            <label>Contraseña</label>
            <input
              className={style.input}
              type={click ? "text" : "password"}
              name="password"
              placeholder=" Ingrese su contraseña"
              onChange={handleOnChange}
            ></input>
            <img
              onClick={() => setClick(!click)}
              className={style.icon_eyes}
              src={click ? icon_eyes_on : icon_eyes_off}
            ></img>
            <div className={style.div_forgot_password}>
              <Link className={style.link} to="">
                <p onClick={handleOnClick }>Olvidé mi contraseña</p>
              </Link>
            </div>
            <input
              className={style.input}
              type="submit"
              value="Ingresar"
            ></input>
            <Link to="/account/register" className={style.link_button}>
              <button className={style.button}>No tenés cuenta? Registrate</button>
            </Link>

            <div id="singInDiv"></div>


          </div>
        </form>
      </div>


    </div>
  );
};
export default Auth;
