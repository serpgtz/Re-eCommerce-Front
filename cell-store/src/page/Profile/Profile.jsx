import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/actions/userActions";
import styles from "./Profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <div className={styles.userContainer}>
      <div className={styles.userDataContainer}>
        <h3>Datos de cuenta</h3>
        <h4>Nombre de usuario: {user.name}</h4>
        <h4>e-mail: {user.email} </h4>
      </div>
      <div className={styles.ordersContainer}>
        <h3>Órdenes</h3>
        {/* {user.orders.map(o=> <p>{o.dates}</p>)} */}
        <p>19 de Mayo 2022</p>
        <p>11 de Junio 2022</p>
        <p>17 de Septiembre 2022</p>
      </div>
      <div className={styles.userProductsContainer}>
        <h3>Productos comprados</h3>
        {/* {products.map(p => p._id === user.order.productId ? <Card key={p._id}
                    name={p.name}
                    image={p.image}
                    price={p.price}/> : null )} */}
        <p>Funda Iphone 11 Power Rangers</p>
        <p>Audiolibro "El Arte de la guerra"</p>
        <p>Xiaomi Redmi Airdots 3</p>
      </div>
      <div className={styles.userReviewsContainer}>
        <h3>Reviews realizadas</h3>
        {/* {user.reviews} */}
        <button>Funda Iphone 11 Power Rangers</button>
        <button>Audiolibro "El Arte de la guerra"</button>
        <button>Xiaomi Redmi Airdots 3</button>
      </div>
    </div>
  );
};

export default Profile;
