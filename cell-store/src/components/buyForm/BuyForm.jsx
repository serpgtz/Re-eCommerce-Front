import React from 'react'
import style from './BuyForm.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const BuyForm = () => {
  return (
   
    <div className={style.container}>
      <form className={style.form}>

       <div className={style.title}><h2>Informacion Personal</h2></div>
      <TextField id="outlined-basic" label="Nombre" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '40ch', height: '6ch' },
      }} />

      <TextField id="outlined-basic" label="Apellido" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '40ch', height: '6ch' },
      }} />

      <TextField id="outlined-basic" label="Email" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '80ch', height: '6ch' },
      }} />
            
      <TextField id="outlined-basic" label="Celular" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '80ch', height: '6ch' },
      }} />

       <TextField id="outlined-basic" label="Informacion adicional" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '80ch', height: '15ch' },
      }} /> 

    <TextField id="outlined-basic" label="Domicilio" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '80ch', height: '6ch'},
      }} /> 

      <input type='submit' value='Finalizar la Orden'></input>
      
   

      </form>
      </div>
  
  )
}

export default BuyForm
