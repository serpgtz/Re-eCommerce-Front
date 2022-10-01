import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './Auth.module.css'
import icon_eyes_on from '../../image/show.png'
import icon_eyes_off from '../../image/hide.png'
import { userLogin } from '../../redux/actions/userActions'

const Auth = () => {
  const [click , setClick] = useState(false)
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    username : '',
    password : ''
  })
  
  const handleOnChange = (evt) => {
    setInput({
      ...input,
      [evt.target.name] : evt.target.value
    })
  }

  
  const handleOnSubmit = (e) => {
     e.preventDefault()
     dispatch(userLogin(input))
  }
  return (
    <div className={style.container}>
      <form onSubmit={handleOnSubmit} className={style.form_login}>
         <div className={style.div_sing}><h2>Sing In</h2></div>
          <div className={style.div_form}> 
            <label>name</label>
            <input type='text' name='username' placeholder=' name' onChange={handleOnChange}></input>
            <label>password</label>
            <input type={click ? 'text' : 'password'} name='password' placeholder=' password' onChange={handleOnChange}></input>
            <img onClick={()=> setClick(!click)} className={style.icon_eyes} src={click ? icon_eyes_on : icon_eyes_off}></img>
            <div className={style.div_forgot_password}>
              <Link className={style.link} to=''><p>Forgor password?</p></Link>
            </div>
            <input type='submit' value='Login'></input>
            <Link to='/account/register' className={style.link_button}><button className={style.button}>Register</button></Link>
            
          </div>
      </form>
    </div>
  )
}

export default Auth