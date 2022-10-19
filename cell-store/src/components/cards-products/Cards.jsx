import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Cards.module.css";
import NotFound from "../NotFound/NotFound";

const Cards = () => {
  const products2 = useSelector((state) => state.product.products2);
  const product = useSelector((state) => state.product.products);

  const byName = useSelector((state) => state.product.byName);

  return (
    <div className={s.cards}>
      {!product.hasOwnProperty("msj") ? (
        byName === "true" ? (
          product?.map((el) => {
            return (
              <div key={el._id}>
                <Link className={s.link} key={el._id} to={`/detail/${el._id}`}>
                  <Card
                    key={el._id}
                    name={el.name}
                    image={el.image}
                    price={el.price}
                    id={el._id}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          products2.products?.map((el) => {
            return (
              <div key={el._id}>
                <Link className={s.link} key={el._id} to={`/detail/${el._id}`}>
                  <Card
                    key={el._id}
                    name={el.name}
                    image={el.image}
                    price={el.price}
                    id={el._id}
                  />
                </Link>
              </div>
            );
          })
        )
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Cards;
