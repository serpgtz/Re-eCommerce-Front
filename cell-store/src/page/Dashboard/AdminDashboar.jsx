import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import s from "./AdminDashboard.module.css";
import { Link } from 'react-router-dom';

import Widget from "./Widget";
import VentasTotales from "./VentasTotales";
/* import Chart from "../../components/Dashboard/chart/Chart";
import Table from "../../components/Dashboard/table/Table"; */
/* import { countAllOrders, getAllUsers, getOrdersToday, sumAllOrders, sumAllToday, sumBeforeLastMonth, sumLastMonth, sumLastThreeMonth, sumLastWeek, getAllComments } from '../../redux/actions'; */


const AdminDashboard = () => {

 /*  const dispatch = useDispatch(); */
  const allusers = useSelector((state) => state.user.users);
  /* const { countOrders, totalSales, totalSalesToday, lastSalesWeek, lastSalesMonth, beforeLastMonth, lastThreeMonth, allOrdersToday } = useSelector((state) => state.dashboard); */

  /*useEffect(() => {
     dispatch(getAllUsers());
    dispatch(countAllOrders());
    dispatch(sumAllOrders());
    dispatch(sumAllToday());
    dispatch(sumLastWeek());
    dispatch(sumLastMonth());
    dispatch(sumBeforeLastMonth());
    dispatch(sumLastThreeMonth());
    dispatch(getOrdersToday());
    dispatch(getAllComments()); 
  }, []); */// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={s.home}>
      <Sidebar />
      <div className={s.homeContainer}>
        
        <div className={s.widgets}>
          <Link to="/adminDashboard/userslist" style={{ textDecoration: "none" }}>
            <Widget type="user" />
          </Link>
          <Link to = '/admin/purchases/list'>
            <Widget type="order" />
          </Link>
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className={s.charts}>
          <VentasTotales />
          {/* <Chart title="Last 3 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        <div className={s.listContainer}>
          <div className={s.listTitle}>Latest Transactions</div>
          {/* <Table /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
