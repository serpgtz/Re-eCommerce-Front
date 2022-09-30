import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../redux/actions/productActions";
import s from "./searchBar.module.css"


export default function SearchBar(){

    const [input,setInputChange] = useState("")

    const dispatch = useDispatch()

    function handleChangeInput(e){
        e.preventDefault()
        setInputChange(e.target.value)
        console.log(input)
    }

    function handleSumit(e){
        dispatch(getProductByName(input))
        setInputChange("")

    }
    

    return(
        <div>
            <input className={s.input} onChange={e=>handleChangeInput(e)} value={input} type="text" placeholder="Buscar..."/>
            <button className={s.btn} onClick={e=>handleSumit(e)}>Buscar</button>
        </div>
    )

}