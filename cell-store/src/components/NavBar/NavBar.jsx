import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserData } from "../../redux/actions/userActions";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../searchBar/searchBar";

export const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.header}>CELL STORE</h1>
      <button className={styles.navBtn}>Smartphones</button>
      <button className={styles.navBtn}>Marcas</button>
      <button className={styles.navBtn}>Ofertas</button>
      <button className={styles.navBtn}>Reviews</button>
      <Link className={styles.link} to="/newproduct">
        <button className={styles.navBtn}> Crear Producto </button>
      </Link>
      <SearchBar />
      <div className={styles.navAuth}>
        {!user ? (
          <Link className={styles.link} to="/account/login">
            <button className={styles.navBtnLogin}>Iniciar sesión</button>
          </Link>
        ) : (
          <Link className={styles.link} to="/account/profile">
            <button className={styles.navBtnUser}>
              {user?.data?.name.charAt(0).toUpperCase()}
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
