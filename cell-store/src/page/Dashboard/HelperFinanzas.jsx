import React from "react";
import { useSelector } from "react-redux";

const { allOrders } = useSelector((state) => state.orders);
const orders = orders;
const totalOrders = orders?.length;

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
const todayOrders = orders?.filter((t) => t.date?.slice(0, 10) === hoy);
const ordersSemanaAnterior = orders?.filter(
  (t) => t.date?.slice(0, 10) > semanaAtrás
);
const ordersDelMes = orders?.filter((t) => t.date?.slice(0, 7) === mes);
const ordersDelMesAnterior = orders?.filter(
  (t) => t.date?.slice(0, 7) === mesAnterior
);
const ordenesTresMeses = orders?.filter(
  (t) => t.date?.slice(0, 7) < tresMesesAtrás
);
//Le pasás cualquiera de las órdenes
const gananciasPorFiltro = (order) => {
  return order.map((p) => p.totalPrice).reduce((a, b) => a + b, 0);
};
