import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../redux/actions/userActions";
import styles from "./Dashboard.module.css";
import FormDash from "./FormDash";
import Reviews from "./Reviews";
import SearchBardDash from "./SearchBarDashboard";
import { button } from "./SearchBarDashboard.module.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.dashContainer}>
      <h2>Usuarios</h2>
      <SearchBardDash />
      <Link className={styles.link} to="/newproduct">
        <button className={button}>Crear producto</button>
      </Link>
      {/* <label>
        Editar usuario
        <FormDash users={users} />
      </label> */}
      <h2>Órdenes</h2>
      {/*users.orders */}
      {/* <div>Agregados Recientemente</div>
      {} */}
      <h2>Reviews</h2>
      <Reviews />
    </div>
  );
};

export default Dashboard;
