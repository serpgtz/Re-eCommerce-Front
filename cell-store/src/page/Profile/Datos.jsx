import { ButtonUnstyled } from "@mui/base";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

import { useSelector } from "react-redux";




export default function Datos(){

    const usuario = useSelector(state=>state.user.user)
    console.log("holaaa",usuario)



return(
   <div >
    <div >
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary={usuario.name} />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary= {usuario.email} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={usuario._id} />
      </ListItem>
      
    </List>
        
       
    </div>
      
   </div>
)




    




}