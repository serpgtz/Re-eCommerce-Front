import React from "react";
import * as s from "../Home/Home.module.css";
import Cards from "../../components/cards-products/Cards";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Paginado from "../../components/Paginado/Paginado.jsx"

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={s.container}>
        <Cards />
        <div>
        <Paginado/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
