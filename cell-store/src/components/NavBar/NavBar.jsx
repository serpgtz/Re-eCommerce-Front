import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../../redux/actions/userActions";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../searchBar/searchBar";
import carrito from '../../image/carrito.png';

export const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { cart } = useSelector(state => state.cart);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(userLogOut());
    navigation(-1);
  };
  return (
    <nav className={styles.navBar}>
      <Link to={"/"}>
        {" "}
        <h1 className={styles.header}>CELL STORE</h1>
      </Link>
      {user.admin === true ? (
        <Link className={styles.link} to="/newproduct">
          <button className={styles.navBtn}> Crear Producto </button>
        </Link>
      ) : null}
      <SearchBar />
      <Link to='/cart' >
        <div className={styles.divCart}>
          <div><img className={styles.imgCarrito} src={carrito} alt="image not found" /></div>          
          <div><span className={styles.spa}> {cart.length} </span></div>
          
        </div>
        
      </Link>
      <div className={styles.navAuth}>
        {localStorage.getItem('token') === null ? (
          <Link className={styles.link} to="/account/login">
            <button className={styles.navBtnLogin}>Iniciar sesión</button>
          </Link>
        ) : (
          <Link className={styles.link} to="/account/profile">
            <button className={styles.navBtnUser}>
              {user?.name?.charAt(0).toUpperCase()}
            </button>
          </Link>
        )}
        {!Object.keys(user).length ? null : (
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
