import React from "react";
import SearchBar from "../../components/searchBar/searchBar";
import * as s from "../Home/Home.module.css";
import Cards from "../../components/cards-products/Cards";
import Footer from "../../components/footer/Footer";

const Home = () => {

  return (
    <div>
      <SearchBar />
      <div className={s.container}>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
