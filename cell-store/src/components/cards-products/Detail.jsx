import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailId,
  resetState,
  ChangeByName2,
  getProductsPerPage,
} from "../../redux/actions/productActions";
import { useEffect } from "react";
import styles from "./Detail.module.css";
import carrito from "../../image/carrito.png";
import corazonVacio from "../../image/corazonVacio.png";
import { addToCart } from "../../redux/actions/cartActions";
import Reviews from "./Reviews";
/* import ReviewsRemix from "./ReviewsRemix"; */

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const myProduct = useSelector((state) => state.product.detail);
  const page = useSelector((state) => state.product.page);

  const handleAddToCart = () => {
    console.log("myProduct-----detail----------////", myProduct);
    dispatch(addToCart(myProduct));
  };

  useEffect(() => {
    dispatch(ChangeByName2());
    dispatch(getDetailId(id));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, id]);

  const navigate = useNavigate();
  const handleGoBackBtn = () => {
    navigate(-1);
  };

  /*  function handleBack() {
     dispatch(getProductsPerPage(page))
     console.log(page)
 
   } */

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
                    <p>
                      <img
                        className={styles.corazon}
                        src={corazonVacio}
                        alt="image not found"
                      />
                    </p>
                  </div>

                  <p className={styles.letter}>
                    <strong>Description : </strong>
                    {myProduct.description}
                  </p>
                </div>
                <div className={styles.buy}>
                  <p className={styles.letter}>
                    <strong>stock : </strong>
                    {myProduct.stock} unidades.
                  </p>

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
