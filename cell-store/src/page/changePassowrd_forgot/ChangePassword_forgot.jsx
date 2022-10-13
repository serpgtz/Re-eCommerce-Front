
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ChangePasswordForgot, newPassword } from '../../redux/actions/userActions'
import style from './ChangePassword_forgot.module.css'
const ChangePassword_forgot = () => {
    const [input, setInput] = useState({
        password : ''
    })
    const dispatch = useDispatch()
    const {id} = useParams()
    const response = useSelector(state => state.user.response_change_password_forgot)
    const responseNewPassword = useSelector(state => state.user.response_newPassword)
    const handleOnChange = (e) => {
         setInput({
            ...input,
            [e.target.name] : e.target.value
         })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(newPassword(input, id))
    }
    useEffect(()=> {
        dispatch(ChangePasswordForgot(id))
    },[])
  return (
    <div className={style.container}>
        <div style={{background: response.error && 'red'}} className={style.div_msg}><h2>{response?.msg}</h2>
         { response?.msg === 'Token aprobado' && <form className={style.form} onSubmit={handleOnSubmit}>
            <input type='password' placeholder='Nueva Contraseña' name='password' value={input.password} onChange={handleOnChange}></input>
            <input className={style.button} type='submit' ></input>
            {responseNewPassword.msg && <div>{responseNewPassword?.msg}</div>}
         </form>}

         </div>
    </div>
   
  )
}

export default ChangePassword_forgot
