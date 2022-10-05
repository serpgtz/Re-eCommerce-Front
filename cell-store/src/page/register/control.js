import { useSelector } from "react-redux"


export const errorInput = (input) => {
    
    let err = {}
  
   if(input.username.length >= 25) {
    err.username = '*maximo 25 caracteres'
  
   } else if(input.username.length == 0) {
    err.username = '*nombre requerido'
   }
  
    
    if(input.email.length == 0 ) {
      err.email = '*email requerido'
    } else if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(!input.email)) {
        err.email = '*email invalido'
    } 
  
    if(input.password.length == 0 ) {
      err.password = '*contraseña requerida'
    } else if (input.password.length < 8 || input.password.length > 25) {
      err.password = '*minimo 8 y maximo 25 caracteres'
    } 
    
    if(input.confirmPassword != input.password) {
      
      err.confirmPassword = '*la contraseña no coincide con la de arriba'
    } 

   return err
  }
  