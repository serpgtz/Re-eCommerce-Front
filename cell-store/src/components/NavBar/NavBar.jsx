import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../../redux/actions/userActions";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../searchBar/searchBar";
import CartNavBar from "../Cart/CartNavBar";
import { changePage, getAllProducts } from "../../redux/actions/productActions";

import { useState } from "react";
import logo from "../../image/logo.png";

export const NavBar = () => {
  const user_redux = useSelector((state) => state.user.user);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  const navigation = useNavigate();

  function handleClick(e) {
    dispatch(changePage(1));
    dispatch(getProductsPerPage(8));
    dispatch(getAllProducts());
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(userLogOut());

    navigation("/account/login");
  };
  return (
    <>
      <nav className={styles.navBar}>
        <Link
          to="/"
          className={styles.header}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <div className={styles.div_logo}>
            <img src={logo} alt="logo-cellStore"></img>
            <h1>Cell Store</h1>
          </div>
        </Link>
        {user_redux?.admin === true || user?.admin === true ? (
          <Link className={styles.link} to="/admin">
            <button className={styles.navBtn}>Adminboard</button>
          </Link>
        ) : null}

        <SearchBar />

        <div className={styles.div_carrito_login}>

          <CartNavBar />

          <div className={styles.navAuth}>
            {localStorage.getItem("token") === null ? (
              <Link className={styles.link} to="/account/login">
                <button className={styles.navBtnLogin}>Iniciar sesión</button>
              </Link>
            ) : (
              <Link className={styles.link} to="/account/profile">
                <button className={styles.navBtnUser}>
                  {Object.keys(user_redux).length > 0
                    ? user_redux?.name?.charAt().toUpperCase()
                    : user?.name.charAt().toUpperCase()}
                </button>
              </Link>
            )}
            {localStorage.getItem("token") && (
              <button
                className={styles.navBtnLogouts}
                onClick={() => handleLogOut()}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

    </>
  );
};
export default NavBar;