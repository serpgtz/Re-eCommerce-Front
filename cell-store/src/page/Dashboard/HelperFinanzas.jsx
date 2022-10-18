import React from "react";
import { useSelector } from "react-redux";

const { allOrders } = useSelector((state) => state.orders);
const totalOrders = allOrders?.orders?.length;

const gananciasTotales = allOrders?.spent;
//Fechas
const hoy = new Date().toISOString().slice(0, 10);
const mes = hoy.slice(0, 7);
const mesAReemplazar = mes.slice(5, 7);
const mesAnterior = mes.replace(mesAReemplazar, mesAReemplazar - 1);
const tresMesesAtrás = mes.replace(mesAReemplazar, mesAReemplazar - 3);
const fechaAReemplazar = hoy.slice(8, 10);
const semanaAtrás = hoy.replace(fechaAReemplazar, fechaAReemplazar - 7);
//Órdenes
const todayOrders = allOrders?.orders?.filter(
  (t) => t.date?.slice(0, 10) === hoy
);
const ordersSemanaAnterior = allOrders?.orders?.filter(
  (t) => t.date?.slice(0, 10) > semanaAtrás
);
const ordersDelMes = allOrders?.orders?.filter(
  (t) => t.date?.slice(0, 7) === mes
);
const ordersDelMesAnterior = allOrders?.orders?.filter(
  (t) => t.date?.slice(0, 7) === mesAnterior
);
const ordenesTresMeses = allOrders?.orders?.filter(
  (t) => t.date?.slice(0, 7) < tresMesesAtrás
);
//Le pasás cualquiera de las órdenes
const gananciasPorFiltro = (orders) => {
  return orders.map((p) => p.totalPrice).reduce((a, b) => a + b, 0);
};
