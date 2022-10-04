import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../../redux/actions/userActions";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../searchBar/searchBar";

export const NavBar = () => {

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const userStorage = JSON.parse(localStorage.getItem('user'))
  
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    dispatch(userLogOut());
    navigation(-1);
  };
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.header}>CELL STORE</h1>
      {userStorage?.admin === true ? (
        <Link className={styles.link} to="/newproduct">
          <button className={styles.navBtn}> Crear Producto </button>
        </Link>
      ) : null}
      <SearchBar />
      <div className={styles.navAuth}>
        {localStorage.getItem('token') === null ? (
          <Link className={styles.link} to="/account/login">
            <button className={styles.navBtnLogin}>Iniciar sesión</button>
          </Link>
        ) : (
          <Link className={styles.link} to="/account/profile">
            <button className={styles.navBtnUser}>
              {userStorage?.name.charAt(0).toUpperCase()}
            </button>
          </Link>
        )}
        {!userStorage ? null : (
          <button
            className={styles.navBtnLogouts}
            onClick={() => handleLogOut()}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
export default NavBar;