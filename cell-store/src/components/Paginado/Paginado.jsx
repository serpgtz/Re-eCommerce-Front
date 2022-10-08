import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage,getProductsPerPage } from "../../redux/actions/productActions"
import s from "../Paginado/Paginado.module.css"


export default function(){
    let limit = 8
    const productsTotal = useSelector(state=>state.product.products)
    const products2 = useSelector((state) => state.product.products2);
    const dispatch = useDispatch()
    
    
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(productsTotal.length/limit); i++) {
        
        pageNumbers.push([i])
        
    }
    
    console.log(products2)
   
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
                    pageNumbers && pageNumbers.map((n, index)=>{
                        return (
                            <li className={parseInt(products2.currentPage) === index+1 ? s.paginadoCurrent : s.paginado} value={n} onClick={e=>handlePage(e)}>{n}</li>
                        )
                    })
                }
                </div>
            </ul>

        </div>
    )
}