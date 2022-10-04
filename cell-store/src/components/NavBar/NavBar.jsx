import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../../redux/actions/userActions";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../searchBar/searchBar";
import {changePage, getAllProducts} from "../../redux/actions/productActions";





export const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  
  function handleClick(e) {
    dispatch(getAllProducts())
    dispatch(changePage(1))
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(userLogOut());
    navigation(-1);
    
  };
  return (
    <nav className={styles.navBar}>
      <Link  to='/' className={styles.header} onClick={(e) => {handleClick(e);}} > <h1>CELL STORE</h1></Link> 
      {user.admin === true ? (
        <Link className={styles.link} to="/newproduct">
          <button className={styles.navBtn}> Crear Producto </button>
        </Link>
      ) : null}
      <SearchBar />
      <div className={styles.navAuth}>
        {!Object.keys(user).length ? (
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