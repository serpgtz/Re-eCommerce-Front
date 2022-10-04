import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import s from './Card.module.css';
import carrito from '../../image/carrito.png'
import corazonVacio from '../../image/corazonVacio.png'
import { addToCart } from '../../redux/actions/cartActions';


const Card = (p) => {
  const dispatch = useDispatch();
  const { name, countInStock, numReviews, exists, id, price, description, stock, image, __v, reviews } = p
  /* const producto = {name, countInStock, numReviews, exists, _id, price, description, stock, image, __v, reviews} */
  const myProduct = useSelector((state) => state.product.products);

  const handleAddToCart = () => {
    const productId = myProduct.filter(e => e._id === id);
    console.log('productId---------//----card', productId[0]);
    dispatch(addToCart(productId[0]));
    console.log(id);
  };

  return (
    <div className={s.card}>
      <div className={s.name}><h3 className={s.titleName}>{p.name}</h3></div>
      <div className={s.imgContein}>
        <img className={s.imgProduct} src={p.image} alt="image not found" />
      </div>

      <div className={s.info}>
        <p className={s.cuotas}>12 CUOTAS SIN INTERÉS</p>
        <p className={s.precio}>${p.price.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      </div>

      <div className={s.footerCard}>
        <div className={s.left}></div>
        <Link className={s.agregarCarrito} to={`/`}>
          <button onClick={handleAddToCart} className={s.buttonCarrito} ><img className={s.imgCarrito} src={carrito} alt="image not found" /></button>
          <button onClick={handleAddToCart} className={s.comprar}>AGREGAR AL CARRITO</button>
        </Link>
        <Link className={s.like} to={`/`}>
          <div className={s.right}> <img className={s.corazon} src={corazonVacio} alt="image not found" /></div>
        </Link>

      </div>
    </div>
  )
}



export default Card;
