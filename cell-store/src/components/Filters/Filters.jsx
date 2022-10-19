import { Box } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilter,
  higherPrice,
  lowerPrice,
  topRated,
  ChangeByName,
} from "../../redux/actions/productActions";
import s from "./Filters.module.css";

function Filters() {
  const products = useSelector((state) => state.product.products);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  const handleFilters = (e) => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(ChangeByName());

    setFilter(dispatch(getFilter(value)));
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
      dispatch(higherPrice(1));
      dispatch(ChangeByName());
      console.log("It's a-me MaRIO", products);
    }
    if (sort === "lowerPrice") {
      dispatch(lowerPrice(1));
    }
    if (sort === "topRated") {
      dispatch(topRated(1));
    }
  }, [sort]);

  return (
    <>
      <div className={s.select}>
        <h3>Ordenar por: </h3>
        <select onClick={(e) => handleSort(e)}>
          <option>Mayor Precio</option>
          <option>Menor Precio</option>
          <option>Mejor valorado</option>
        </select>
      </div>
      <aside className={s.aside}>
        <Box>
          <h3>Filtrar por:</h3>
          <div className={s.select}>
            <select name="filter" id="cars" onChange={(e) => handleFilters(e)}>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Samsung">Samsung</option>
              <option value="Motorola">Motorola</option>
              <option value="Lenovo">Lenovo</option>
            </select>
          </div>
        </Box>
      </aside>
    </>
  );
}
export default Filters;
