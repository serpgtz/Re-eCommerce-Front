import { Button } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { confirmUser } from '../../redux/actions/userActions'

const ConfirmedEmail = () => {
  const dispatch = useDispatch()
  const error_back = useSelector(state => state.user.error_confirm_token)
    const {id} = useParams()
   const navigate = useNavigate()
 
   const handleOnClick = () => {
     dispatch(confirmUser(id))
     if (error_back.msg.length > 0) {
        setTimeout(()=> {
            navigate('/account/login')
         }, 300)
     }
   }



  return (
    <div>
        
      <h1>Gracias por Crearse una cuenta en nuestra pagina</h1>
      <h2>seleccione</h2>
      {error_back.msg ? <h2>TOKEN NO VALIDO</h2> : 
      <button onClick={handleOnClick}>Confirmar su Cuenta</button>}
    </div>
  )
}

export default ConfirmedEmail
