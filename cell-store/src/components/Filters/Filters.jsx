import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBrand } from '../../redux/actions/productActions';
import s from './Filters.module.css';


function Filters() {
    const dispatch = useDispatch();
    const brand = useSelector((state) => { return state.product.brand; })

    useEffect(() => {
        (brand).length === 0 ? dispatch(getBrand()) : console.log('no despacho nada')
    }, [dispatch, brand]);

    const handleFilterByTypeProduct = (e) => {
        console.log(e.target.value)

    }

    return (
        <aside className={s.aside}>
            <div>
                <h3>Ordenar por: </h3>
                <ul>
                    <li>Mayor Precio</li>
                    <li>Menor Precio</li>
                    <li>Mejor valorado</li>
                </ul>
            </div>
            <div>
                <h3>Filtrar por:</h3>

                <div>
                    <label >Lowest Health Score</label>
                    <input
                        type="radio"
                        onChange={() => setSelectedRadio("low-score")}
                        id="brand"
                        name="brand"
                    ></input>
                </div>

                <div className={s.select}>
                    <select name="cars" id="cars" onChange={handleFilterByTypeProduct}>
                        <option value="cell">Cell</option>
                        <option value="phoneCover">PhoneCover</option>
                        <option value="headphones">Headphones</option>
                        <option value="charger">Charger</option>
                    </select>
                </div>

                {/* 
                
                excluyentes entre sí
                cell, phoneCover, headphones, charger ////////////////

        cell
       , screen,  ram, storagessd,
        systemOp, 
        
        phoneCover,
         screen,
        
        paratodos
        brand, model, 
        onSale freeShipping,
        
        */}
        //Marca ------------
            </div>

        </aside>
    )
}

export default Filters