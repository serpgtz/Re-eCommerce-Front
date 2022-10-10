import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./Auth.module.css";
import icon_eyes_on from "../../image/show.png";
import icon_eyes_off from "../../image/hide.png";
import { getUserData, userLogin } from "../../redux/actions/userActions";
import Alert from "../../components/alert/Alert";
import jwt_decode from 'jwt-decode'



const Auth = () => {
  const [click, setClick] = useState(false);
  //const [error , setError] = useState({})
  const navigate = useNavigate()
  const error_back = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  

  const handleResponseGoogle = (response) => {
      console.log('jwt =>' + response.credential)
      localStorage.setItem('user_google', JSON.stringify(jwt_decode(response.credential)))
  }
  useEffect(()=> {
    google.accounts.id.initialize({
      client_id : '2890899428-u9cjg4ihv7m8i9es40sb2quegdbqm0c3.apps.googleusercontent.com',
      callback : handleResponseGoogle
    })

    google.accounts.id.renderButton(
      document.getElementById("singInDiv"),
      {theme: "outline", size: "large"}
    )
    if(Object.keys(token).length > 0){
      
        dispatch(getUserData());
        
        return navigate('/')
       
    
    } 
  },[ dispatch, token])
  console.log(token)
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

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
  
  console.log(error_back)
  return (
    <div className={style.container}>
      {error_back.msg?.length > 0 && (
        <Alert msg={error_back.msg}/>
      )}
      <form  onSubmit={handleOnSubmit} className={style.form_login}>
        
           <h2>Sing In</h2>
            <div className={style.div_form}>
               <label>name</label>
             <input
              type="text"
              name="username"
              placeholder=" name"
              onChange={handleOnChange}
            ></input>
            <label>password</label>
            <input
              type={click ? "text" : "password"}
              name="password"
              placeholder=" password"
              onChange={handleOnChange}
            ></input>
            <img
              onClick={() => setClick(!click)}
              className={style.icon_eyes}
              src={click ? icon_eyes_on : icon_eyes_off}
            ></img>
            <div className={style.div_forgot_password}>
              <Link className={style.link} to="">
                <p>Forgor password?</p>
              </Link>
            </div>
            <input type="submit" value="Login"></input>
            <Link to="/account/register" className={style.link_button}>
              <button className={style.button}>Register</button>
            </Link>
              
              <div id="singInDiv"></div>
          
         
        </div>
      </form>
    </div>
  );
};
export default Auth;
