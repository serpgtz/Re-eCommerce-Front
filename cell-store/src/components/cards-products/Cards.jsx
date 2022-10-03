import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductsPerPage,
} from "../../redux/actions/productActions";
import s from "./Cards.module.css";
import { useState } from "react";
import NotFound from "../NotFound/NotFound";

const Cards = () => {
  const dispatch = useDispatch();
  const products2 = useSelector((state) => state.product.products2);
  const product = useSelector((state) => state.product.products);
  const page = useSelector((state) => state.product.page);
  const byName = useSelector((state) => state.product.byName);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProductsPerPage(page));
  }, [dispatch]);

    return (
        <div className={s.cards}>
            
            {
            !product.hasOwnProperty("msj")?
            byName==="true"? 
            product?.map((el) => {
                return (
                    <div key={el._id}>
                        <Link className={s.link} key={el._id} to={`/detail/${el._id}`}>
                            <Card
                                key={el._id}
                                name={el.name}
                                image={el.image}
                                price={el.price}
                            />
                        </Link>
                    </div>
                );
            }):
            products2.products?.map((el) => {
                return (
                    
                    <div key={el._id}>
                        <Link className={s.link} key={el._id} to={`/detail/${el._id}`}>
                            <Card
                                key={el._id}
                                name={el.name}
                                image={el.image}
                                price={el.price}
                            />
                        </Link>
                    </div>
                );
            }):<NotFound/>
            }
          
        </div>
    )
}

export default Cards;
