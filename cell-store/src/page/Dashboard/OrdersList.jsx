import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, /* useDispatch */ } from 'react-redux';
import Sidebar from "./Sidebar";
/* import { getAllOrders } from "../../redux/actions/ordersActions"; */

import s from './OrdersList.module.css';

const OrdersList = () => {
  /* const dispatch = useDispatch(); */
  const { orders } = useSelector((state) => state.orders.allOrders);

 /*  React.useEffect(() => {
    dispatch(getAllOrders());
  }, []); */

  const rows = orders?.map((o) => ({
    id: o._id,
    userId: o.user,
    items: o.orderItems?.map(e => e.name + ', '),
    metodoDePago: o.PaymentMethod,
    status: o.status,
    date: o.date,
  }));

  const orderColumns = [
    { field: "id", headerName: "ID de la Compra", width: 240 },
    {
      field: "userId",
      headerName: "ID del Usuario",
      width: 240,
      renderCell: (params) => {
        return <div className="userName">{params.row.userId}</div>;
      },
    },
    {
      field: "items",
      headerName: "Productos",
      width: 360,
      renderCell: (params) => {
        return (
          <div>{params.row.items}</div>
        );
      },
    },
    {
      field: "metodoDePago",
      headerName: "Método de Pago",
      width: 180,
    },
    {
      field: "status",
      headerName: "Estado",
      width: 100,
      renderCell: (params) => {
        return (
          <div>{params.row.status}</div>
        );
      },
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 95,
      renderCell: (params) => {
        return (
          <div>{params.row.date}</div>
        );
      },
    },
  ];


  return (
    <div className={`list ${s.list}`}>
      <Sidebar/>
      <div className={`listContainer ${s.listContainer}`}>
        <div
          style={{
            width: "100%",
            height: "60%",
            marginTop: "4rem",
            marginLeft: "0.25rem",
          }}
        >
        <DataGrid
          autoHeight
          rows={rows}
          columns={orderColumns}
          pageSize={8}
          rowsPerPageOptions={[8]}
        />
        </div>
      </div>
    </div>
  )
}

export default OrdersList;