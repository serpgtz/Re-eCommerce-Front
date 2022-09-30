import React from 'react';
import s from './Card.module.css';

const Card = (p) => {

  return (
    <div className={s.card}>
      <img src={p.image} alt="image not found" />
      <div className={s.info}>
        <div><h3>{p.name}</h3></div>
        <p>${p.price}</p>
      </div>
    </div>
  )
}



export default Card;
