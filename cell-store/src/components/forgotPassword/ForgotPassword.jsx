import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPasswordEmail } from '../../redux/actions/userActions'
import style from './ForgotPassword.module.css'
import alert_icon from '../../image/alerta.png'
const forgotPassword = ({active, setActive}) => {
    
     const dispatch = useDispatch()
     const response = useSelector(state => state.user.response_email)

     console.log(response)
  const [input, setInput] = useState({
    email : ''
  })
  
  const handleOnChange = (e) => {
     setInput({
        ...input,
        [e.target.name] : e.target.value
     })
  }
 
  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(forgotPasswordEmail(input))
    setInput({
        email : ''
    })
  }
  return (
   active && <div className={style.container}>
   <div className={style.div_container}>
     
     <h2>Escriba su email</h2>
     <button className={style.button} onClick={()=> setActive(!active)}>X</button>
     
     <form onSubmit={handleOnSubmit} className={style.form}>
         <input type='text' name='email' onChange={handleOnChange} value={input.email}></input>
         <input type='submit'></input>
     </form>
   </div>
   {response?.msg && <div style={{background: response.error ? 'rgb(223, 134, 134)' : 'rgb(141, 214, 141)'}} className={style.div_msg}>
       {response.error === false && <img src={alert_icon} alt='alert'></img>}
        <p>{response.msg}</p>
        
        </div>}
 </div>
  )
}

export default forgotPassword
