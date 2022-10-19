import React from "react";
import { useSelector } from "react-redux";

const { allOrders } = useSelector((state) => state.orders);
const orders = allOrders?.orders;
const totalOrders = orders?.length;

const gananciasTotales = allOrders?.spent;

//Función para formatear fechas
function formato(string) {
  if (string.length === 6) {
    return string.slice(0, 5) + "0" + string.slice(5, 6);
  }
  if (string.length === 7) {
    return string.slice(0, 5) + "" + string.slice(5, 7);
  }
}

//Función para sustituir meses
const mesAReemplazar = (month) => {
  if (month.slice(5, 7) <= 10) return month.slice(5, 7);

  if (month.slice(6, 7) >= 9) return month.slice(6, 7);
};

//Fechas
const hoy = new Date().toISOString().slice(0, 10);
const mes = hoy.slice(0, 7);
const fechaAReemplazar = hoy.slice(8, 10);
const semanaAtrás = hoy.replace(fechaAReemplazar, fechaAReemplazar - 7);

const mesAnterior = formato(
  mes.replace(mesAReemplazar(mes), mesAReemplazar(mes) - 1)
);

const dosMesesAtrás = formato(
  mesAnterior?.replace(
    mesAReemplazar(mesAnterior),
    mesAReemplazar(mesAnterior) - 1
  )
);

const tresMesesAtrás = dosMesesAtrás?.replace(
  mesAReemplazar(dosMesesAtrás),
  mesAReemplazar(dosMesesAtrás) - 1
);
//Órdenes
const todayOrders = orders?.filter((t) => t.date?.slice(0, 10) === hoy);
const ordersSemanaAnterior = orders?.filter(
  (t) => t.date?.slice(0, 10) > semanaAtrás
);

/*Presentes*/ const ordersDelMes = orders?.filter(
  (t) => t.date?.slice(0, 7) === mes
);

/*Ninguna del mes*/
const ordersPasadas = orders?.filter((t) => t.date?.slice(0, 7) !== mes);
//Pasadas
const ordersDelMesAnterior = ordersPasadas?.filter(
  (t) => t.date?.slice(0, 7) === mesAnterior
);
const ordenesDosMeses = ordersPasadas?.filter(
  (t) => t.date?.slice(0, 7) <= dosMesesAtrás
);
const ordenesTresMeses = ordersPasadas?.filter(
  (t) => t.date?.slice(0, 7) <= tresMesesAtrás
);
//Le pasás cualquiera de las órdenes
const gananciasPorFiltro = (order) => {
  return order?.map((p) => p.totalPrice).reduce((a, b) => a + b, 0);
};

//Para consoleloguear
console.log(
  gananciasPorFiltro(ordenesTresMeses),
  tresMesesAtrás,
  "SON=>",
  ordenesTresMeses,
  "CANTIDAD:",
  ordenesTresMeses.length,
  "<=3Meses"
);
console.log(
  gananciasPorFiltro(ordenesDosMeses),
  dosMesesAtrás,
  "SON=>",
  ordenesDosMeses,
  "CANTIDAD:",
  ordenesDosMeses.length,
  "<=2Meses"
);
console.log(
  gananciasPorFiltro(ordersDelMesAnterior),
  mesAnterior,
  "SON=>",
  ordersDelMesAnterior.length,
  "MesAnterior"
);
console.log(
  gananciasPorFiltro(ordersDelMes),
  "SON=>",
  ordersDelMes.length,
  "MES"
);
console.log(
  gananciasPorFiltro(ordersSemanaAnterior),
  "SON=>",
  ordersSemanaAnterior.length,
  "SEMANA"
);
console.log(gananciasPorFiltro(todayOrders), "HOY");
