import React, { useState } from 'react'
import { Link } from "react-router-dom";
import style from './Register.module.css'
import icon_eyes_on from '../../image/show.png'
import icon_eyes_off from '../../image/hide.png'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../../redux/actions/userActions'
import { errorInput } from './control'
import Alert from '../../components/alert/Alert'
import { useNavigate } from 'react-router-dom'

const Register = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
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

  const submitRedirect = () => {

    if (!error_back.msg) {
      setTimeout(() => {
        navigate('/confirm')
      }, 500)
    }
  }

  return (
    <div className={style.container}>
      {error_back.msg?.length > 0 && <Alert msg={error_back.msg} />}
      <div className={style.form_register}>

        <div className={style.divcerrar}>
          <Link to="/">
            <button className={style.cerrar}  >x</button>
          </Link>

        </div>
        <form onSubmit={handleOnSubmit} >
          <h1>Create Account</h1>
          <div className={style.div_form} >
            <div className={style.div_div_form}>
              <label>userName</label>
              <input
                type='text'
                name='username'
                style={{ border: error.username && '1px solid red' }}
                onChange={handleOnChange} value={input.username}
              ></input>
              {error.username && <p>{error.username}</p>}


              <label>email</label>
              <input
                type='text'
                name='email'
                style={{ border: error.email && '1px solid red' }}
                onChange={handleOnChange}
                value={input.email}
              ></input>
              {error.email && <p>{error.email}</p>}


              <label>password</label>
              <input
                type={click ? 'text' : 'password'}
                name='password'
                style={{ border: error.password && '1px solid red' }}
                onChange={handleOnChange}
                value={input.password}
              ></input>
              {error.password && <p>{error.password}</p>}


              <label>confirm password</label>
              <input
                type={click ? 'text' : 'password'}
                name='confirmPassword'
                style={{ border: error.confirmPassword && '1px solid red' }}
                onChange={handleOnChange}
                value={input.confirmPassord}
              ></input>
              {error.confirmPassword && <p>{error.confirmPassword}</p>}

              <div className={style.div_icon} onClick={() => setClick(!click)}>
                <img className={style.icon_eyes} src={click ? icon_eyes_on : icon_eyes_off}></img></div>
            </div>
          </div>
          <input
            type='submit'
            value='Registrarse'
            className={style.button}
            disabled={Object.values(error).length == 0 ? false : true}
            onClick={submitRedirect}
          ></input>
        </form>
      </div>



    </div>

  )
}

export default Register
