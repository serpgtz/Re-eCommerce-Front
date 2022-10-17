import React from "react";
import * as s from "../Home/Home.module.css";
import Cards from "../../components/cards-products/Cards";
import Paginado from "../../components/Paginado/Paginado.jsx";
import Footer from "../../components/footer/Footer";
import Carrusel from "../../components/carrusel/Carrusel";

const Home = () => {

  return (
    <div>
        <Carrusel/>
      <div className={s.maxContainer}>
        <div className={s.container}>
          <Cards />
        </div>{" "}
      </div>
      <Paginado />
      <Footer />
    </div>
  );
};

export default Home;
