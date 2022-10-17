import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import style from './Register.module.css'
import icon_eyes_on from '../../image/show.png'
import icon_eyes_off from '../../image/hide.png'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../../redux/actions/userActions'
import { errorInput } from './control'
//import Alert from '../../components/alert/Alert'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle'

const Register = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true)
  const error_back = useSelector(state => state.user.error_register)
  const [error, setError] = useState({})
  const [click, setClick] = useState(false)
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })

    setError(errorInput({
      ...input, [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('email_register_', input.email)
    dispatch(userRegister(input))

    setInput({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
    
   
  }
//<Alert msg={error_back.msg}
useEffect(()=> {
  console.log(error_back)
  if (error_back?.error === false) {
    console.log('dentro del if', error_back)
    return navigate('/confirm')
  
 }
},[error_back])

  return (
    <div className={style.container}>
      {error_back.error  &&  <Stack sx={{ width: '27%' }} spacing={2}>
      <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  {error_back.msg}<strong>
 ¡Échale un vistazo!</strong>
</Alert>
    
    </Stack>
      
      
     }
     

        {/* <div className={style.divcerrar}>
          <Link to="/">
            <button className={style.cerrar}  >x</button>
          </Link>

        </div> */}
        <form className={style.form_register} onSubmit={handleOnSubmit} >
         
          <div className={style.div_form} >
           
              <label>NOMBRE</label>
              <input
                type='text'
                name='username'
                placeholder='Tu Nombre'
                style={{ border: error.username && '1px solid red' }}
                onChange={handleOnChange} value={input.username}
              ></input>
              {error.username && <p>{error.username}</p>}


              <label>EMAIL</label>
              <input
                type='text'
                name='email'
                placeholder='Tu Email'
                style={{ border: error.email && '1px solid red' }}
                onChange={handleOnChange}
                value={input.email}
              ></input>
              {error.email && <p>{error.email}</p>}


              <label>Contraseña</label>
              <input
                type={click ? 'text' : 'password'}
                name='password'
                placeholder='contraseña'
                style={{ border: error.password && '1px solid red' }}
                onChange={handleOnChange}
                value={input.password}
              ></input>
              {error.password && <p>{error.password}</p>}


              <label>Repetir Contraseña</label>
              <input
                type={click ? 'text' : 'password'}
                name='confirmPassword'
                placeholder='Repetir contraseña'
                style={{ border: error.confirmPassword && '1px solid red' }}
                onChange={handleOnChange}
                value={input.confirmPassord}
              ></input>
              {error.confirmPassword && <p>{error.confirmPassword}</p>}

              <div className={style.div_icon} onClick={() => setClick(!click)}>
                <img className={style.icon_eyes} src={click ? icon_eyes_on : icon_eyes_off}></img></div>
            
          </div>
          <input
            type='submit'
            value='Crea una Cuenta'
            className={style.button}
            disabled={Object.values(error).length == 0 ? false : true}
           
          ></input>
          <Link className={style.link} to='/account/login'>¿Ya tienes una cuenta ? Inicia Sesion</Link>
        </form>
     


    </div>

  )
}

export default Register
