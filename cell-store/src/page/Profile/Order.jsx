import React, { useEffect } from "react";

import {getAllOrders} from "../../redux/actions/ordersActions"
import { useSelector, useDispatch } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';






export default function Orders(){

    const dispatch = useDispatch()

    const order = useSelector(state=>state.orders.allOrders)
    console.log("ordenes",order)
    const usuario = useSelector(state => state.user.user)
    console.log("desde order",usuario)

    let id= usuario._id
    console.log("id",id)
    
    const orderUsuario = order.filter(orden=>orden.user===usuario._id)
    console.log("ordenusuario", orderUsuario)
    useEffect(()=>{
        dispatch(getAllOrders())
    },[])


    return (
      
    <TableContainer  component={Paper} >
      <Table sx={{ maxWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell  style={{ width: '5rem' }} align="left">FECHA</TableCell>
            <TableCell  style={{ width: '9rem' }} align="center">METODO DE PAGO</TableCell>
            <TableCell  style={{ width: '2rem' }} align="center">ESTATUS</TableCell>
            <TableCell  style={{ width: '10rem' }} align="center">ORDENES</TableCell>
            <TableCell  style={{ width: '3rem' }} align="center">IMAGEN</TableCell>
            <TableCell  style={{ width: '12rem' }}  align="center" >NUMERO DE ORDEN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderUsuario.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              
              <TableCell align="center">{row.PaymentMethod}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.orderItems?.map(or=>{
                return(
                  
                  <div>
                   
                    <p>{or.name}</p>
                  </div>  
                
                  
                )
              })}</TableCell>
              <TableCell align="center">{row.orderItems?.map(or=>{
                return(
                  
                  <div>
                   
                    <img src={or.image} alt="not found" width="55rem" />
                  </div>  
                
              
                  
                )
              })}</TableCell>
             <TableCell align="center">{row._id}<br/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  

      
    )



}

