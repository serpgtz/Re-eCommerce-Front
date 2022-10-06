import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilter,
  higherPrice,
  lowerPrice,
  topRated,
} from "../../redux/actions/productActions";
import s from "./Filters.module.css";

function Filters() {
  const products = useSelector((state) => state.product.products);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  console.log(products);
  const handleFilterByTypeProduct = (e) => {
    setFilter(e.target.value);
  };
  const handleSort = (e) => {
    if (e.target.innerText === "Mayor Precio") {
      setSort(products?.sort((a, b) => a.price - b.price));
    }

    if (e.target.innerText === "Menor Precio") {
      setSort(products?.sort((a, b) => b.price - a.price));
    }
    if (e.target.innerText === "Mejor valorado") {
      setSort(products?.sort((a, b) => a.rating - b.rating));
    }
  };
  useEffect(() => {}, [products]);

  return (
    <aside className={s.aside}>
      <div>
        <h3>Ordenar por: </h3>
        <ul onClick={(e) => handleSort(e)}>
          <li>Mayor Precio</li>
          <li>Menor Precio</li>
          <li>Mejor valorado</li>
        </ul>
      </div>
      <div>
        <h3>Filtrar por:</h3>
        <div className={s.select}>
          <select
            name="filter"
            id="cars"
            onChange={(e) => handleFilterByTypeProduct(e)}
          >
            <option value="cell">Cell</option>
            <option value="phoneCover">PhoneCover</option>
            <option value="headphones">Headphones</option>
            <option value="charger">Charger</option>
          </select>
        </div>
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
    </aside>
  );
}

export default Filters;
