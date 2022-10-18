import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";
import s from './Card.module.css';
import carrito from '../../image/carrito.png'
import corazonVacio from '../../image/corazonVacio.png'
import corazonRojo from '../../image/corazonrojo.png'
import { addToCart } from '../../redux/actions/cartActions';


const Card = (p) => {
  const dispatch = useDispatch();
  const { id } = p
  /* const producto = {name, countInStock, numReviews, exists, _id, price, description, stock, image, __v, reviews} */
  const myProduct = useSelector((state) => state.product.products);
  const productCart = useSelector((state) => state.cart.cart);
  const filtroConfetti = productCart.filter(e => e._id === id);
  const user_redux = useSelector((state) => state.user.user);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [likeP, setLikeP] = useState({
    like: false,
    id_product: id,
    image: p.image,
    name: p.name,

  })
  let like = {
    like: false,
    id_product: id,
    image: p.image,
    name: p.name,
  }
  let likes = [];
  let likeTrue = [];
  console.log('myProduct', myProduct)

  useEffect(() => {
    if (localStorage.getItem('likes')) {
      likes = (JSON.parse(localStorage.getItem('likes')));
      console.log('likes', likes)
      likeTrue = likes.filter((l) => {
        return l.id_product === id
      })
      if (likeTrue.length) {
        setLikeP({
          like: true,
          id_product: id,
          image: p.image,
          name: p.name,
        })

        // console.log('likeTrue', likeTrue)
        // console.log('likeP', likeP)
      }
    }
  }, [])


  const handleAddLike = (e) => {
    e.preventDefault();
    like = {
      like: true,
      id_product: id,
      image: p.image,
      name: p.name,
    }
    // console.log('like', like)
    // console.log('likes', likes)
    // console.log('id', id)
    if (localStorage.getItem('likes')) {
      likeTrue = [];
      likes = (JSON.parse(localStorage.getItem('likes')));
      likeTrue = likes.filter((l) => {
        return l.id_product === id
      })

      if (likeTrue.length) {
        // alert('El producto se quitará de tus favoritos')
        likes = likes.filter((l) => {
          return l.id_product !== id
        })
        setLikeP({
          like: false,
          id_product: id,
          image: p.image,
          name: p.name,
        })

      } else {
        // alert('El producto se guardará en tus favoritos')
        likes.push(like);
        setLikeP({
          like: true,
          id_product: id,
          image: p.image,
          name: p.name,
        })
      }
      localStorage.setItem("likes", JSON.stringify(likes))
    } else {
      // alert('El producto se guardará en tus favoritos')
      let likes = [];
      likes.push(like);
      localStorage.setItem("likes", JSON.stringify(likes))
      setLikeP({
        like: true,
        id_product: id,
        image: p.image,
        name: p.name,
      })
    }

  }



  const handleAddToCart = (e) => {
    const productId = myProduct.filter(e => e._id === id);
    console.log('productId---------//----card', productId[0]);
    dispatch(addToCart(productId[0]));
    console.log(id);
    //efecto confetti
    if (!filtroConfetti[0]) {
      party.confetti(e.target, {
        count: party.variation.range(20, 40),
      });
    } else {
      null
    }

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
          {user_redux?.admin === true || user?.admin === true ? (
            null
          ) :
            <span className={s.button}>
              <button onClick={handleAddToCart} className={s.buttonCarrito} ><img className={s.imgCarrito} src={carrito} alt="image not found" /></button>
              <button onClick={handleAddToCart} className={s.comprar}>Agregar al carrito</button>
            </span>

          }
        </Link>

        <div className={s.right} onClick={e => handleAddLike(e)}>
          {/* <button className={s.like}  > */}
          {console.log('likeP', likeP)}
          {likeP.like ?
            <img
              className={s.corazon}
              src={corazonRojo}
              alt="image not found" />
            :
            <img
              className={s.corazon}
              src={corazonVacio}
              alt="image not found" />
          }
          {/* </button> */}
        </div>




      </div>
    </div >
  )
}



export default Card;
