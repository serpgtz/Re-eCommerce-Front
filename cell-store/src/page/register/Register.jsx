import React, { useState } from 'react'
import style from './Register.module.css'
import icon_eyes_on from '../../image/show.png'
import icon_eyes_off from '../../image/hide.png'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../../redux/actions/userActions'
import { errorInput } from './control'
import Alert from '../../components/alert/Alert'
import { useToast, Button, Input, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText} from '@chakra-ui/react'




const Register = () => {
  const toast = useToast()
  const dispatch = useDispatch()
   const error_back = useSelector(state => state.user.error_register)
  const [error, setError] = useState({})
  const [click , setClick] = useState(false)
  const [input, setInput] = useState({
    username : '',
    email: '',
    password: '',
    confirmPassword : ''
  })
   
  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
     })

     setError(errorInput({
      ...input, [e.target.name]:e.target.value
    }))
  }
 
  const handleOnSubmit = (e) => {
       e.preventDefault()
       localStorage.setItem('email_register', input.email)
       dispatch(userRegister(input))
          
       setInput({
        username : '',
        email: '',
        password: '',
        confirmPassword: ''
      })

     
  }

  
console.log(error_back?.msg)

  return (
    
    <div className={style.container}>
      {error_back.msg?.length > 0 && <Alert msg={error_back.msg}/>}
      <form onSubmit={handleOnSubmit} className={style.form_register}>
         <h1>Create Account</h1>
        <div className={style.div_form} >
             <div className={style.div_div_form}>
              <label>userName</label>
              <input type='text' name='username' style={{border : error.username && '1px solid red'}} onChange={handleOnChange} value={input.username}></input>
               {error.username && <p>{error.username}</p>}
 
            
              <label>email</label>
              <input type='text' name='email' style={{border : error.email && '1px solid red'}} onChange={handleOnChange} value={input.email}></input>
              {error.email && <p>{error.email}</p>}

           
              <label>password</label>
              <input type={click ? 'text' : 'password'} name='password' style={{border : error.password && '1px solid red'}} onChange={handleOnChange} value={input.password}></input>
              {error.password && <p>{error.password}</p>}
             
            
              <label>confirm password</label>
              <input type={click ? 'text' : 'password'} name='confirmPassword' style={{border : error.confirmPassword && '1px solid red'}} onChange={handleOnChange} value={input.confirmPassord}></input>
              {error.confirmPassword && <p>{error.confirmPassword}</p>}

            <div className={style.div_icon}  onClick={()=> setClick(!click)}><img className={style.icon_eyes} src={click ? icon_eyes_on : icon_eyes_off}></img></div>
            </div>
        </div>
        <input type='submit' value='Register' className={style.button} disabled={Object.values(error).length == 0 ? false : true}  ></input>
         
      
           
      </form>
     
   
    </div> 
     
  )
}

export default Register
