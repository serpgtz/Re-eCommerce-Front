export const errorInputForm = (input) => {
    
    let err = {}
  
   if(input.name.length >= 25) {
    err.name = '*maximo 25 caracteres'
  
   } else if(input.name.length == 0) {
    err.name = '*nombre requerido'
   }
  

   if(input.lastName.length >= 25) {
    err.lastName = '*maximo 25 caracteres'
  
   } else if(input.lastName.length == 0) {
    err.lastName = '*apellido requerido'
   }
  

   if(input.email.length >= 25) {
    err.email = '*maximo 25 caracteres'
  
   } else if(input.email.length == 0) {
    err.email = '*email requerido'
   }
  

 if(input.phone.length == 0) {
    err.phone = '*celular requerido'
   }
  

 if(input.address_user.length == 0) {
    err.address_user = '*direccion requerido'
   }
  
    
  
  

   return err
  }
  