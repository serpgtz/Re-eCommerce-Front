import React, { useState } from 'react'
import style from './Register.module.css'
import icon_eyes_on from '../../image/show.png'
import icon_eyes_off from '../../image/hide.png'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../redux/actions/userActions'
const Register = () => {
  
  const dispatch = useDispatch()
  const [click , setClick] = useState(false)
  const [input, setInput] = useState({
    username : '',
    email: '',
    password: '',
  })
   
  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
     })
  }
  console.log(input)
  const handleOnSubmit = (e) => {
       e.preventDefault()
       dispatch(userRegister(input))

       setInput({
        username : '',
        email: '',
        password: '',
      })
  }



  return (
    <div className={style.container}>
      <form onSubmit={handleOnSubmit} className={style.form_register}>
         <h2>Create Account</h2>
        <div className={style.div_form} >
            <div>
              <label>userName</label>
              <input type='text' name='username' placeholder=' name' onChange={handleOnChange} value={input.username}></input>
            </div>

            <div>
              <label>email</label>
              <input type='text' name='email' placeholder=' email' onChange={handleOnChange} value={input.email}></input>
            </div>

            <div>
              <label>password</label>
              <input type={click ? 'text' : 'password'} name='password' placeholder='password' onChange={handleOnChange} value={input.password}></input>
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
