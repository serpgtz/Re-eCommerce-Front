import React from "react";
import * as s from "../Home/Home.module.css";
import Cards from "../../components/cards-products/Cards";
import Paginado from "../../components/Paginado/Paginado.jsx";
import Carrusel from "../../components/carrusel/Carrusel";
import { getAllOrders } from "../../redux/actions/ordersActions";
import { useDispatch } from "react-redux";
import Filters from "../../components/Filters/Filters";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div>
      <Carrusel />
      <div className={s.maxContainer}>
        <div className={s.container}>
          <Filters />
          <Cards />
        </div>{" "}
      </div>
      <Paginado />
    </div>
  );
};

export default Home;
