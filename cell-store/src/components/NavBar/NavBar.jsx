import React from "react";
import { Link } from "react-router-dom";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../searchBar/searchBar";

export const NavBar = () => {
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
    </nav>
  );
};
export default NavBar;
