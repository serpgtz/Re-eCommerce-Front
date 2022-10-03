import React from "react";
import * as s from "../Home/Home.module.css";
import Cards from "../../components/cards-products/Cards";
import Paginado from "../../components/Paginado/Paginado.jsx";
import Filters from "../../components/Filters/Filters";


const Home = () => {
  return (
    <div>
      <div className={s.maxContainer}>
        <div className={s.filters}>
          <Filters />
        </div>
        <div className={s.container}>
          <Cards />
        </div>
      </div>
      <Paginado />
    </div>
  );
};

export default Home;
