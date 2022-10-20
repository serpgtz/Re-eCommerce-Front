import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailId,
  resetState,
  ChangeByName2,
} from "../../redux/actions/productActions";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Detail.module.css";
import carrito from "../../image/carrito.png";
import corazonVacio from "../../image/corazonVacio.png";
import corazonRojo from '../../image/corazonrojo.png'
import { addToCart } from "../../redux/actions/cartActions";
import Reviews from "./Reviews";
/* import ReviewsRemix from "./ReviewsRemix"; */
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const myProduct = useSelector((state) => state.product.detail);
  const page = useSelector((state) => state.product.page);
  const user_redux = useSelector((state) => state.user.user);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


  const [likeP, setLikeP] = useState({
    like: false,
    id_product: id,
    image: myProduct.image,
    name: myProduct.name,

  })
  let like = {
    like: false,
    id_product: id,
    image: myProduct.image,
    name: myProduct.name,
  }
  let likes = [];
  let likeTrue = [];


  useEffect(() => {
    if (localStorage.getItem('likes')) {
      likes = (JSON.parse(localStorage.getItem('likes')));
      likeTrue = likes.filter((l) => {
        return l.id_product === id
      })
      if (likeTrue.length) {
        setLikeP({
          like: true,
          id_product: id,
          image: myProduct.image,
          name: myProduct.name,
        })
      }
    }
  }, [])


  const handleAddLike = (e) => {
    e.preventDefault();
    like = {
      like: true,
      id_product: id,
      image: myProduct.image,
      name: myProduct.name,
    }

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
          image: myProduct.image,
          name: myProduct.name,
        })

      } else {
        // alert('El producto se guardará en tus favoritos')
        likes.push(like);
        setLikeP({
          like: true,
          id_product: id,
          image: myProduct.image,
          name: myProduct.name,
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
        image: myProduct.image,
        name: myProduct.name,
      })
    }

  }
  useEffect(() => {
    dispatch(ChangeByName2());
    dispatch(getDetailId(id));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(myProduct));
  };
  const handleGoBackBtn = () => {
    navigate(-1);
  };

  const reviewPro = useSelector((state) => state.review);
  let score = 0;
  const reducer = (accumulator, curr) => accumulator + curr;
  const sumaryScore = () => {
    const sumary = [];
    if (reviewPro?.reviews?.length > 0) {
      reviewPro?.reviews?.map((element) => {

        sumary.push(element.rating);
      });
      score = sumary.reduce(reducer) / sumary.length;
    }
  };
  sumaryScore();

  const reviewsTotales = reviewPro?.reviews?.length;

  return (
    <div className={styles.mainDetailContainer}>
      <div className={styles.nav}>
        <button className={styles.navButonGoBack} onClick={handleGoBackBtn}>
          Volver
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.caja}>
          {myProduct.err ? (
            <div className={styles.error404}>
              <Link to="/">
                <img
                  src="https://www.tastefullyoffensive.com/wp-content/uploads/2020/11/if-youre-looking-for-wtf-stock-photos-youve-come-to-the-right-place-110-pics-1.jpg"
                  alt="Not found"
                />
              </Link>
            </div>
          ) : myProduct ? (
            <>
              <div className={styles.cajaDividida}>
                <div className={styles.cardImage}>
                  <img src={myProduct.image} alt="not found" />
                </div>
                <div className={styles.cardDetail}>
                  <h3 className={styles.titleone}>{myProduct.name}</h3>
                  <div className={styles.priceLike}>
                    <p className={styles.price}>${myProduct.price}</p>
                    <p onClick={e => handleAddLike(e)}>

                      {(user?.admin === false || user_redux?.admin === false || user === null) ?
                        <p>
                          {console.log('likeP', likeP)}
                          {likeP.like ?
                            <img
                              className={styles.corazon}
                              src={corazonRojo}
                              alt="image not found" />
                            :
                            <img
                              className={styles.corazon}
                              src={corazonVacio}
                              alt="image not found" />
                          }
                        </p>
                        : null

                      }

                    </p>
                  </div>

                  <div id={styles.review_block}>
                    <span id={styles.review_detail}>
                      Rating:{" "}
                      <strong>
                        {score === 0
                          ? "Sin calificación aún"
                          : score.toFixed(1)}
                      </strong>{" "}
                    </span>
                    <div id={styles.review_block2}>
                      <span id={styles.review_detail}>
                        <Box
                          sx={{
                            '& > legend': { mt: 2 },
                          }}
                        >
                          <Rating
                            name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                            value={score}
                          />
                        </Box>
                      </span>

                      {reviewsTotales > 0 ? <span id={styles.review_letter}>{reviewsTotales} reviews</span> : null}
                    </div>
                  </div>

                  <p className={styles.letterDescrip}>
                    <strong>Description : </strong>
                    {myProduct.description}
                  </p>
                </div>
                <div className={styles.buy}>
                  <p className={styles.letter}>
                    <strong>stock : </strong>
                    {myProduct.stock} unidades.
                  </p>
                  {(user?.admin === false || user_redux?.admin === false) ?
                    <div>
                      <div className={styles.btnBuy}>Proceder a la compra</div>
                      <div onClick={handleAddToCart} className={styles.btnCar}>
                        <img
                          className={styles.imgCarrito}
                          src={carrito}
                          alt="image not found"
                        />
                        Agregar al carrito
                      </div>
                    </div>
                    : null
                  }
                </div>
              </div>
              <Reviews id={id} image={myProduct.image} name={myProduct.name} />
            </>
          ) : (
            <img
              src="https://aquamarineexotic.com/adminpanel/assets/images/page-loading-old.gif"
              alt="loading"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;

/* /products */
