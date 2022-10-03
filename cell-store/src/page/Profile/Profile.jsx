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
        Datos de cuenta
        <h2>{user.data.name}</h2>
        <h2>e-mail: {user.data.email} </h2>
      </div>
      <div className={styles.ordersContainer}>
        Órdenes
        <p>19 de Mayo 2022</p>
        <p>11 de Junio 2022</p>
        <p>17 de Septiembre 2022</p>
      </div>
      <div className={styles.userProductsContainer}>
        Productos comprados
        <p>Funda Iphone 11 Power Rangers</p>
        <p>Audiolibro "El Arte de la guerra"</p>
        <p>Xiaomi Redmi Airdots 3</p>
      </div>
      <div className={styles.userReviewsContainer}>
        Reviews realizadas
        <button>Funda Iphone 11 Power Rangers</button>
        <button>Audiolibro "El Arte de la guerra"</button>
        <button>Xiaomi Redmi Airdots 3</button>
      </div>
    </div>
  );
};

export default Profile;
