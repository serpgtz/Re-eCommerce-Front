import React, { useState } from 'react'
import style from './Register.module.css'
import icon_eyes_on from '../../image/show.png'
import icon_eyes_off from '../../image/hide.png'
const Register = () => {

  const [click , setClick] = useState(false)
  return (
    <div className={style.container}>
      <form className={style.form_register}>
         <h2>Create Account</h2>
        <div className={style.div_form} >
            <div>
              <label>userName</label>
              <input type='text' placeholder=' name'></input>
            </div>

            <div>
              <label>email</label>
              <input type='text' placeholder=' email'></input>
            </div>

            <div>
              <label>password</label>
              <input type={click ? 'text' : 'password'} placeholder='password'></input>
            </div>
             
            <div>
              <label>confirm password</label>
              <input type={click ? 'text' : 'password'} placeholder='repeat password'></input>
            </div>

            <div className={style.div_icon} onClick={()=> setClick(!click)}><img className={style.icon_eyes} src={click ? icon_eyes_on : icon_eyes_off}></img></div>
        </div>
        <input type='submit' value='Register' className={style.button}></input>
           
      </form>
    </div>
  )
}

export default Register
