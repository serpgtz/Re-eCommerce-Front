import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPasswordEmail } from '../../redux/actions/userActions'
import style from './ForgotPassword.module.css'
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
     {response?.msg && <div style={{background: response.error ? 'red' : 'green'}} className={style.div_msg}>{response.msg}</div>}
     <form onSubmit={handleOnSubmit} className={style.form}>
         <input type='text' name='email' onChange={handleOnChange} value={input.email}></input>
         <input type='submit'></input>
     </form>
   </div>
 </div>
  )
}

export default forgotPassword
