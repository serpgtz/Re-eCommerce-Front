import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";

import s from './Cards.module.css';

const Cards = (p) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div className={s.cards}>
            {products?.map((el) => {
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
            })}

        </div>
    )
}

export default Cards;