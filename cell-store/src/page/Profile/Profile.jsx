import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserData } from "../../redux/actions/userActions";
import Reviews from "./Reviews";
import Datos from "./Datos";
import { useState } from "react";
import Button from '@mui/material/Button'
import s from "./Profile.module.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Profile = () => {
  const dispatch = useDispatch();
//Usuario normal
  const user = useSelector((state) => state.user.user);

    const [input,setInput] = useState("")
   

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  function handleClick(e){
    e.preventDefault()
   
   console.log(input)
    

   

  }

  return (
        <div className={s.container}>
          <div className= {s.user}>
          <AccountBoxIcon
            color="primary"
            fontSize="large"/>
          <h1>Hola {user.name}</h1>
          </div>
          <div className={s.buttons} >
            
            <Button variant="outlined" color="primary"
            onClick={()=>setInput("mis datos")}>
              Mis Datos
            </Button>
            <Button variant="outlined" color="primary"
            onClick={()=>setInput("reviews")}>
              Reviews
              </Button>
              <Button variant="outlined" color="primary"
            onClick={()=>setInput("reviews")}>
              Otracosa
              </Button>
              <Button variant="outlined" color="primary"
            onClick={()=>setInput("reviews")}>
              OtraCosa2
              </Button>

            {/* <ul >
              <li onClick={()=>setInput("mis datos")} >Mis datos</li>
              <li onClick={()=>setInput("reviews")}>Reviews</li>
            </ul> */}
            
          </div>
          
          <div className={s.display}>
           { input==="mis datos" &&  <Datos/>}
           
           { input==="reviews" &&  <Reviews/>}
           </div>
           

          
       
          
          
        </div>
     
      )
};

export default Profile;
