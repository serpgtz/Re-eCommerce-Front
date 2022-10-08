import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUserByName} from "../../redux/actions/userActions"

import s from "./SearchBarDashboard.module.css"


export default function SearchBardDash(){

    
    const [name, setName] = useState("")
    const dispatch = useDispatch()


    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleName(e){
    dispatch(getUserByName(name))
    setName("")
    }



return(

    <div className={s.container}>
        
         <input className={s.input2} onChange={(e)=>handleInputChange(e)} value={name} type="text" placeholder="NameUser..."/>
         <button className={s.button} onClick={(e)=>handleName(e)}>Buscar</button>
         
    </div>
)
   

}