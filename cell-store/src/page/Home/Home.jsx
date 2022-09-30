import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import * as s from "../Home/Home.module.css";
import Card from "../../components/cards-products/Card";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className={s.container}>
        <div className={s.cards}>
          {products?.map((el) => {
            return (
              <div key={el._id}>
                <Link key={el._id} to={`/detail/${el._id}`}>
                  <Card
                    key={el._id}
                    name={el.name}
                    image={el.image}
                    price={el.price}
                  />
                </Link>
              </div>
            );
          })}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
