import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './ModalMsg.module.css'
import Alert from '@mui/material/Alert'
import { Checkbox } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { useEffect } from 'react';
import { json } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ModalMsg = ({location, setLocation, error, setError}) => {
   const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 


  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
   
    
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
     
     
    
       setLocation(event.target.defaultValue)
    

    
   
  };
  console.log(location)
  
  const { gilad, jason, antoine } = state;
 
  const error_ = [gilad, jason, antoine].filter((v) => v).length !== 1;
  

 useEffect(()=> {
  setError(error_)
  
 })
  return (
    <div className={styles.container}>
      <Button  variant="outlined" size='large' onClick={handleOpen}>Retirar en</Button>
      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      > 
      
        <Box sx={style}>
          {error_ === false ? <Alert severity="success">Ya elijio el Local!</Alert> :
          <Alert severity="info">Elije el local para retirar el Producto</Alert>
          }
        
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Importante antes de realizar la Compra!
          </Typography>
          <Box sx={{ display: 'flex' }}>
      <FormControl error={error_} sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Locales</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox disabled={jason || antoine && true }  value='Rivadavia 18005, B1708 Morón, Provincia de Buenos Aires' checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Rivadavia 18005, B1708 Morón, Provincia de Buenos Aires"
          />
          <FormControlLabel
            control={
              <Checkbox disabled={gilad || antoine && true } value='Av. Dr. Honorio Pueyrredón 1841, Buenos Aires' checked={jason} onChe onChange={handleChange} name="jason" />
            }
            label="Av. Dr. Honorio Pueyrredón 1841, Buenos Aires"
          />
          <FormControlLabel
            control={
              <Checkbox disabled={gilad || jason && true } value='Domingo Faustino Sarmiento 36, C6740 Chacabuco, Provincia de Buenos Aires' checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Domingo Faustino Sarmiento 36, C6740 Chacabuco, Provincia de Buenos Aires"
          />
        </FormGroup>
        <FormHelperText>Elije el local</FormHelperText>
      </FormControl>
      
    </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalMsg
