import React from "react";
import * as s from "../Home/Home.module.css";
import Cards from "../../components/cards-products/Cards";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Paginado from "../../components/Paginado/Paginado.jsx"
import Filters from "../../components/Filters/Filters";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={s.maxContainer}>
        <div className={s.filters}>
          <Filters />
        </div>

        <div className={s.container}>
          <Cards />
        </div>
      </div>

      <Paginado />
      <Footer />
    </div>


  );
};


export default Home;
