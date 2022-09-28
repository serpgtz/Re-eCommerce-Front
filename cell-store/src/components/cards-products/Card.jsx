import React from 'react';
import s from './Card.module.css';

const Card = (p) => {

  return (
    <div className={s.wrapper}>
      <img className={s.card} src={p.image} alt="img" />
      <div clasname={s.info}>
        <h3>{p.name}</h3>
        <p>{p.price}</p>
      </div>

    </div>
  )
}



export default Card;
