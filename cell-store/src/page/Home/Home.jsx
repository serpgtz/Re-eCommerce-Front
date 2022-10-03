import React from "react";
import * as s from "../Home/Home.module.css";
import Cards from "../../components/cards-products/Cards";
import Paginado from "../../components/Paginado/Paginado.jsx";

const Home = () => {
  return (
    <div>
      <div className={s.container}>
        <Cards />
      </div>
      <Paginado />
    </div>
  );
};

export default Home;
