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
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">FECHA</TableCell>
            <TableCell align="right">METODO DE PAGO</TableCell>
            <TableCell align="right">ESTATUS</TableCell>
            <TableCell align="right">ORDENES</TableCell>
            <TableCell align="right">IMAGEN</TableCell>
            <TableCell align="right">Numero de Orden</TableCell>
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
              
              <TableCell align="right">{row.PaymentMethod}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.orderItems?.map(or=>{
                return(
                    // <TableRow>
                  <div>
                   
                    <p>{or.name}</p>
                  </div>  
                
                    // </TableRow>
                    // <img src={or.image} alt="not found" width="50px" />
                )
              })}</TableCell>
              <TableCell align="right">{row.orderItems?.map(or=>{
                return(
                    // <TableRow>
                  <div>
                   
                    <img src={or.image} alt="not found" width="55rem" />
                  </div>  
                
                    // </TableRow>
                  
                )
              })}</TableCell>
             <TableCell align="right">{row._id}<br/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  

      
    )



}

