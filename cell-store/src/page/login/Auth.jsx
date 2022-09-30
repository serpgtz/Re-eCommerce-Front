import React from 'react'
import { Link } from 'react-router-dom'
import style from './Auth.module.css'
const Auth = () => {
  return (
    <div className={style.container}>
      <form className={style.form_login}>
         <div className={style.div_sing}><h2>Sing In</h2></div>
          <div className={style.div_form}> 
            <label>name</label>
            <input type='text' placeholder=' name'></input>
            <label>password</label>
            <input type='password' placeholder=' password'></input>
            <div className={style.div_forgot_password}>
              <Link className={style.link} to='/'><p>Forgor password?</p></Link>
            </div>
            <input type='submit' value='Login'></input>
            <Link to='/' className={style.link_button}><button className={style.button}>Register</button></Link>
           
          </div>
      </form>
    </div>
  )
}

export default Auth