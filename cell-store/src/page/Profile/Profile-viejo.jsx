import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewByUser } from "../../redux/actions/reviewActions";
import { getUserData } from "../../redux/actions/userActions";
import styles from "./Profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
//Usuario normal
  const user = useSelector((state) => state.user.user);
//Usuario por Admin
  const userSecret = useSelector((state) =>
    state.user.users.filter((u) => u.username === user.name)
  );

  console.log(userSecret[0]);
  useEffect(() => {
    dispatch(getReviewByUser(userSecret[0]?._id));
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <div className={styles.userContainer}>
      <div className={styles.userDataContainer}>
        <h3>Datos de cuenta</h3>
        <h4>Nombre de usuario: {user?.name}</h4>
        <h4>e-mail: {user?.email} </h4>
      </div>
      <div className={styles.ordersContainer}>
        <h3>Órdenes</h3>
{/* Órdenes hardcodeadas porque todavía no están, pero en assets hay un js que acá no utilicé */}
        {/* {user.orders.map(o=> <p>{o.dates}</p>)} */}
        <p>19 de Mayo 2022</p>
        <p>11 de Junio 2022</p>
        <p>17 de Septiembre 2022</p>
      </div>
      <div className={styles.userProductsContainer}>
        <h3>Productos comprados</h3>
{/*Acá irían los productos que coincidan con la orden*/}
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
{/*Acá aparecen las reviews del usuario*/}
        {user.admin === true && (
          <p>No podés hacer review, papá, sos el admin</p>
        )}
        {userSecret?.reviews
          ? userSecret?.reviews?.map((review) => (
              <Link to={`/detail/${review?.product.id}`}>
                <p>{review?.product.name}</p>
                <p>{review?.comment}</p>
              </Link>
            ))
          : "Todavía no has hecho ninguna review"}
      </div>
    </div>
  );
};

export default Profile;
