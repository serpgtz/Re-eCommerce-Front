import React from 'react'
import { useSelector } from "react-redux";

import s from "./Chart.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const Chart = ({ aspect, title }) => {
  const { orders, spent } = useSelector((state) => state.orders.allOrders);
  const gananciasTotales = spent;
  const hoy = new Date().toISOString().slice(0, 10);
  const mes = new Date().toISOString().slice(0, 7);

  const todayOrders = orders?.filter(
    (t) => t.date?.slice(0, 10) === hoy
  );
  const gananciasSemanaAnterior = () => {
    const fechaAReemplazar = hoy.slice(8, 10);
    const semanaAtras = hoy.replace(fechaAReemplazar, hoy.slice(8, 10) - 7);
    const ganancias = orders?.filter(
      (t) => t.date?.slice(0, 10) > semanaAtras
    );
    console.log("ORDENES DE LA SEMANA ANTERIOR", ganancias);
    return ganancias.map((p) => p.totalPrice).reduce((a, b) => a + b, 0);
  };

  const ordersDelMes = orders?.filter(
    (t) => t.date?.slice(0, 7) === mes
  );

  const gananciasDelDia = todayOrders
    .map((p) => p.totalPrice)
    .reduce((a, b) => a + b, 0);

  const gananciasDelMes = ordersDelMes
    .map((p) => p.totalPrice)
    .reduce((a, b) => a + b, 0);

  const mes2 = () => {
    const mesAReemplazar = mes.slice(5, 7);
    const dosMesesAtrás = mes.replace(mesAReemplazar, mesAReemplazar - 2);
    const gananciasDosMeses = orders?.filter(
        (t) => t.date?.slice(0, 7) < dosMesesAtrás
      );
      return gananciasDosMeses.map((p) => p.totalPrice).reduce((a, b) => a + b, 0);
  }

  const ganancias3 = () => {
    const mesAReemplazar = mes.slice(5, 7);
    const tresMesesAtras = mes.replace(mesAReemplazar, mes.slice(5, 7) - 3);
    const ganancias = orders?.filter(
      (t) => t.date?.slice(0, 7) < tresMesesAtras
    );
    return ganancias.map((p) => p.totalPrice).reduce((a, b) => a + b, 0);
  };

  /* const { lastSalesMonth, beforeLastMonth, lastThreeMonth } = useSelector((state) => state.dashboard); */
  const data = [
    { name: "Ago", Total: `${ganancias3()}` },
    { name: "Sep", Total: `${mes2()}` },
    { name: "Oct", Total: `${gananciasDelMes}` },
  ];



  return (
    <div className={s.chart}>
      <div className={s.titleChart}>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className={s.chartGrid} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
