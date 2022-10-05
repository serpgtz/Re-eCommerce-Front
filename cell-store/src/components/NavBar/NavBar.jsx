import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../../redux/actions/userActions";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../searchBar/searchBar";
import { changePage, getAllProducts } from "../../redux/actions/productActions";
import carrito from '../../image/carrito.png';

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const userStorage = JSON.parse(localStorage.getItem("user"));

  function handleClick(e) {
    dispatch(changePage(1));
    dispatch(getProductsPerPage(8));
    dispatch(getAllProducts());
  }

  const { cart } = useSelector(state => state.cart);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(userLogOut());
    navigation(-1);
  };
  return (
    <nav className={styles.navBar}>
      <Link
        to="/"
        className={styles.header}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {" "}
        <h1>CELL STORE</h1>
      </Link>
      {userStorage?.admin === true && (
        <Link className={styles.link} to="/adminDashboard">
          <button className={styles.navBtn}>Adminboard</button>
        </Link>
      )}

      <SearchBar />

      <Link to='/cart' >
        <div className={styles.divCart}>
          <div><span className={styles.spa}> {cart.length} </span></div>
          <div><img className={styles.imgCarrito} src={carrito} alt="image not found" /></div>

        </div>

      </Link>
      <div className={styles.navAuth}>
        {localStorage.getItem("token") === null ? (
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
