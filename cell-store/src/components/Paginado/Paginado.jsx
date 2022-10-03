import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage,getProductsPerPage } from "../../redux/actions/productActions"
import s from "../Paginado/Paginado.module.css"


export default function(){
    let limit = 7
    const productsTotal = useSelector(state=>state.product.products)

    const dispatch = useDispatch()
   
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(productsTotal.length/limit); i++) {
        
        pageNumbers.push([i])
        
    }

    function handlePage(e){
        e.preventDefault()
        console.log("paginado",e.target.value)
        dispatch(changePage(e.target.value))
        dispatch(getProductsPerPage(e.target.value))

    }

    return(
        <div className={s.container}>
            <ul>
                <div className={s.subcontainer}>
                {
                    pageNumbers && pageNumbers.map(n=>{
                        return (
                            <li className={s.paginado} value={n} onClick={e=>handlePage(e)}>{n}</li>
                        )
                    })
                }
                </div>
            </ul>

        </div>
    )
}