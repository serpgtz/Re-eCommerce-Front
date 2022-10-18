import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import style from './Faq.module.css'
import { Link } from 'react-router-dom';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
const Faq = () => {
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={style.container}>
    <div className={style.div_faq}>
        <h2>Preguntas Frequentes</h2>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>¿Cómo creo una cuenta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para crearse una cuenta necesita ir a este enlace <Link to='/account/register'>Registrarse</Link>, una vez registrado tendras que confirmar 
            la cuenta , llendo a su correo electronico , podra obtener un link para acceder y activar su cuenta.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>¿Olvidaste tu contraseña?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Si necesita acceder a su cuenta y no se acuerda de su contraseña , ingresa en <Link to='/account/login'>login</Link>, dale click en <strong>olvide contraseña</strong>,
            y debera de ingresar su correo electronico para poder enviarle los pasos a seguir en el mismo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>¿Porque no me deja registrarme?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            si intento registrarse y no pudo por algun error  , probablemente se deba a que el correo o el usuario ya existe , en ese caso 
            deberia de salir una alerta con dicho problema
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>¿ Como comprar ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            podra seleccionar el producto interesado al carrito de compras , alli podra ver el total a pagar
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Metodo de Pago</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            De momento el metodo de pago es con MercadoPago 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Pago aprobado</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            si el proceso de compra fue aprobado , su pedido estara registrado y debera de retirarlo en la sucursal elegido
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Pago pendiente</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            si todavia no se realizo el proceso de compra, su pedido estara se quedara en estado pendiente hasta que finalize la misma,
            si se arrepintio , no tienes que hacer nada
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    </div>
  )
}

export default Faq
