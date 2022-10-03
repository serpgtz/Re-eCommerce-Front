import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserData, userLogOut } from "../../redux/actions/userActions";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../searchBar/searchBar";

export const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(userLogOut());
  };
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.header}>CELL STORE</h1>
      {user.admin === true ? (
        <Link className={styles.link} to="/newproduct">
          <button className={styles.navBtn}> Crear Producto </button>
        </Link>
      ) : null}
      <SearchBar />
      <div className={styles.navAuth}>
        {!user.length ? (
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
        {!user.length ? null : (
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
