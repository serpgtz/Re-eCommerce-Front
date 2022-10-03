import React from 'react';
import { Link } from "react-router-dom";
import s from './Card.module.css';
import carrito from '../../image/carrito.png'
import corazonVacio from '../../image/corazonVacio.png'

const Card = (p) => {

  return (
    <div className={s.card}>
      <div className={s.name}><h3>{p.name}</h3></div>
      <div className={s.imgContein}>
        <img className={s.imgProduct} src={p.image} alt="image not found" />
      </div>

      <div className={s.info}>
        <p>12 CUOTAS SIN INTERÉS</p>
        <p>${p.price.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      </div>

      <div className={s.footerCard}>
        <div className={s.left}></div>
        <Link className={s.agregarCarrito} to={`/`}>
          <button className={s.buttonCarrito} ><img className={s.imgCarrito} src={carrito} alt="image not found" /></button>
          <button className={s.comprar}>AGREGAR AL CARRITO</button>
        </Link>
        <Link className={s.like} to={`/`}>
          <div className={s.right}> <img className={s.corazon} src={corazonVacio} alt="image not found" /></div>
        </Link>

      </div>
    </div>
  )
}



export default Card;
