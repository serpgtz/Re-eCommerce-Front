import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../../redux/actions/userActions";
import styles from "../NavBar/NavBar.module.css";
import SearchBar from "../searchBar/searchBar";
import CartNavBar from "../Cart/CartNavBar";
import { changePage, getAllProducts } from "../../redux/actions/productActions";
import MenuAccount from "../menuAccount/MenuAccount";
import { useState } from "react";
import logo from "../../image/logo.png";
import corazonRojo from '../../image/corazonrojo.png'


export const NavBar = () => {
  const [click, setClick] = useState(false)
  const user_redux = useSelector((state) => state.user.user);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  const navigation = useNavigate();

  function handleClick(e) {
    dispatch(changePage(1));
    dispatch(getProductsPerPage(8));
    dispatch(getAllProducts());
  }


  // 

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


        <SearchBar />

        <div className={styles.div_carrito_login}>

          <CartNavBar />
          <Link to="/favoritos">
            <div>
              <img
                className={styles.corazon}
                src={corazonRojo}
                alt="image not found" />
            </div>
          </Link>



          
            {localStorage.getItem("token") === null ? (
              <Link className={styles.link} to="/account/login">
                <button className={styles.navBtnLogin}>Iniciar sesión</button>
              </Link>

            ) : <MenuAccount/> }
           
          
         
          

        </div>

      </nav>

    </>
  );
};
export default NavBar;