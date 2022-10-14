import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import s from "./AdminDashboard.module.css";
import { Link } from "react-router-dom";

import Widget from "./Widget";
import ProductAdmin from "./ProductAdmin";
import Reviews from "./Reviews";
import { getAllUsers } from "../../redux/actions/userActions";
import { getAllProducts } from "../../redux/actions/productActions";
/* import Featured from "../../components/Dashboard/featured/Featured";
import Chart from "../../components/Dashboard/chart/Chart";
import Table from "../../components/Dashboard/table/Table"; */
/* import { countAllOrders, getAllUsers, getOrdersToday, sumAllOrders, sumAllToday, sumBeforeLastMonth, sumLastMonth, sumLastThreeMonth, sumLastWeek, getAllComments } from '../../redux/actions'; */

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const allusers = useSelector((state) => state.user.users);
  const allProducts = useSelector((state) => state.product.products);
  /* const { countOrders, totalSales, totalSalesToday, lastSalesWeek, lastSalesMonth, beforeLastMonth, lastThreeMonth, allOrdersToday } = useSelector((state) => state.dashboard); */
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={s.home}>
      <Sidebar />
      {/* <Reviews users={allusers} products={allProducts} /> */}
      {/* <div className={s.homeContainer}>
        
        <div className={s.widgets}>
          <Link to="/admin/userslist" style={{ textDecoration: "none" }}>
            <Widget type="user" />
          </Link>
          <Link to = '/admin/purchases/list'>
            <Widget type="order" />
          </Link>
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className={s.charts}>
          <Featured />
          <Chart title="Last 3 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className={s.listContainer}>
          <div className={s.listTitle}>Latest Transactions</div>
          <Table />
        </div>
      </div> */}
    </div>
  );
};

export default AdminDashboard;
