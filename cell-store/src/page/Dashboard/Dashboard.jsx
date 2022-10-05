import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../redux/actions/userActions";
import styles from "./Dashboard.module.css";
import FormDash from "./FormDash";
import SearchBardDash from "./SearchBarDashboard";
import { button } from "./SearchBarDashboard.module.css";
import Slider from "./Slider";

const Dashboard = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.dashContainer}>
      <h1>Dashboard</h1>
      <SearchBardDash />
      <Link className={styles.link} to="/newproduct">
        <button className={button}>Crear producto</button>
      </Link>
      <Slider users={users} />
      <label>
        Editar usuario
        <FormDash users={users} />
      </label>
      <div>Órdenes</div>
      {/*users.orders */}
      {/* <div>Agregados Recientemente</div>
      {} */}
    </div>
  );
};

export default Dashboard;
