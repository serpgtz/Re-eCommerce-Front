import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import s from "./widget.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { getAllOrders } from "../../redux/actions/ordersActions";


const Widget = ({ type }) => {
  let data;
  
  const allusers = useSelector((state) => state.user.users);
  /* const { countOrders, totalSales } = useSelector((state) => state.dashboard); */
  const { orders, spent } = useSelector((state) => state.orders.allOrders);
  const totalOrders = orders.length
 /*  let orderDay = orders[0].date.slice(0, 10);
  let hoy = new Date().toISOString().slice(0, 10); */
  

  let totalusers = allusers.length
  const totalGanancias = Math.round(spent*0.20)

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USUARIOS",
        isMoney: false,
        link: "Ver todos los usuarios",
        icon: (
          <PersonOutlinedIcon
            className={s.iconWit}
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDENES",
        isMoney: false,
        link: "Ver todas las ordenes",
        icon: (
          <ShoppingCartOutlinedIcon
            className={s.iconWit}
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "GANANCIAS",
        isMoney: true,
        link: "",
        icon: (
          <MonetizationOnOutlinedIcon
            className={s.iconWit}
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "VENTAS TOTALES",
        isMoney: true,
        link: "",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className={s.iconWit}
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div className={s.widget}>
      <div className={s.leftWit}>
        <span className={s.titleWit}>{data.title}</span>
        <span className={s.counter}>
          {data.title === 'VENTAS TOTALES' && `$ ${spent.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          {data.title === "USUARIOS" && `${totalusers}`}
          {data.title === "ORDENES" && `${totalOrders}`}
          {data.title === 'GANANCIAS' && `$ ${totalGanancias.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
        </span>
        <span className={s.linkR}>{data.link}</span>
      </div>
      <div className={s.rightWit}>
        {data.title === 'GANANCIAS' && <div className={s.percentage_positive}>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
