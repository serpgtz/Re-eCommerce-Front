import React from "react";
import * as s from "../Home/Home.module.css";

import Paginado from "../../components/Paginado/Paginado.jsx";
import Carrusel from "../../components/carrusel/Carrusel";
import { getAllOrders } from "../../redux/actions/ordersActions";
import { useDispatch } from 'react-redux';
// import SliderCard from "../../components/sliderCard/SliderCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { style } from "@mui/system";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div className={s.container}>
        <Carrusel/>
        
      <div className={s.div_ver_mas}>
        <Link to='/store/discount/show' style={{textDecoration: 'none', color: 'rgb(96, 177, 228);'}}><Button variant="contained" disableElevation>
      Ver Mas
    </Button></Link>
      </div>
    

      {/* <SliderCard /> */}
      
    </div>
  );
};

export default Home;
