import React, { useState } from "react";
import { useEffect } from "react";
import { render } from "react-dom";
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
  console.log(products);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  const handleFilters = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const filter = dispatch(getFilter(value));
    setFilter({ ...filter, [e.target.name]: value });
  };
  const handleSort = (e) => {
    const value = e.target.innerText;
    if (value === "Mayor Precio") {
      setSort("higherPrice");
    }
    if (value === "Menor Precio") {
      setSort("lowerPrice");
    }
    if (value === "Mejor valorado") {
      setSort("topRated");
    }
  };
  useEffect(() => {
    if (sort === "higherPrice") {
      console.log("entré");
      console.log("It's a-me MaRIO", products);
      dispatch(higherPrice());
    }
    if (sort === "lowerPrice") {
      dispatch(lowerPrice());
    }
    if (sort === "topRated") {
      dispatch(topRated());
    }
  }, [dispatch]);

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
          <select name="filter" id="cars" onChange={(e) => handleFilters(e)}>
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
