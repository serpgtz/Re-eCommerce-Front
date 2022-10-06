import React from "react";
import * as s from "../Home/Home.module.css";
import Cards from "../../components/cards-products/Cards";
import Paginado from "../../components/Paginado/Paginado.jsx";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/footer/Footer";
import Carousel from 'react-bootstrap/Carousel';
import imagen_carrusel_1 from '../../image/portabilidad-tienda-30-12-octubre-2021-desktop.webp'
import imagen_carrusel_2 from '../../image/samsung-galaxy-fold-flip-4-descuento-10-tienda-claro-desktop.webp'
import imagen_carrusel_3 from '../../image/wearables-huawei-band-7-tienda-claro-desktop.webp'
import imagen_carrusel_4 from '../../image/motorola-edge-30-pro-tienda-claro-desktop.webp'

const Home = () => {
  return (
    <div>
       
       <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen_carrusel_1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen_carrusel_2}
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen_carrusel_3}
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 







      <div className={s.maxContainer}>
        <div className={s.filters}>
          <Filters />
        </div>
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
