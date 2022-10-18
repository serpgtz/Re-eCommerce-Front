import React from 'react'
import { useSelector } from "react-redux";

import s from "./VentasTotales.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
/* import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; */
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const VentasTotales = () => {
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

  const ganancias3 = () => {
    const mesAReemplazar = mes.slice(5, 7);
    const tresMesesAtras = mes.replace(mesAReemplazar, mes.slice(5, 7) - 3);
    const ganancias = orders?.filter(
      (t) => t.date?.slice(0, 7) < tresMesesAtras
    );
    return ganancias.map((p) => p.totalPrice).reduce((a, b) => a + b, 0);
  };
  console.log("dia", gananciasDelDia);

  console.log("semana", gananciasSemanaAnterior());

  console.log("Mes", gananciasDelMes);

  console.log("Estos 3 Meses", ganancias3());

  /* const { totalSalesToday, totalSales, lastSalesWeek, lastSalesMonth } = useSelector((state) => state.dashboard); */
  //const allusers = useSelector((state) => state.user.users);
  
 
  const ventasDelDía = () => {
    const hoy = new Date().toISOString().slice(0, 10);
    const todayOrders = orders?.filter(
      (t) => t.date?.slice(0, 10) === hoy
    );
    return todayOrders.length;
  };
  const ventasRealizadasHoy = ventasDelDía()

  const ventasDeHoy = () => {
    const hoy = new Date().toISOString().slice(0, 10);
    const todayOrders = orders?.filter(
      (t) => t.date?.slice(0, 10) === hoy
    );
    return todayOrders;
  };
  const ventasHoy = ventasDeHoy()
  const totalDeVentasHoy = ventasHoy.map(p => p.totalPrice).reduce((a, b) => a + b, 0)

 
  const porcentajeVenta = Math.round(totalDeVentasHoy/spent*100)

  return (
    <div className={s.featured}>
      <div className={s.top}>
        <h1 className={s.title}>Ingresos Totales</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={s.bottomVentas}>
        <div className={s.featuredChart}>
          <CircularProgressbar value={porcentajeVenta} text={`${porcentajeVenta} %`} strokeWidth={5} />
        </div>
        <p className={s.title}>Ventas totales realizadas hoy</p>
        <p className={s.amount}>{Math.round(ventasRealizadasHoy)}</p>
        <p className={s.desc}>
            Procesamiento de transacciones anteriores. Es posible que no se incluyan los últimos pagos.
        </p>
        <div className={s.summary}>
          <div className={s.itemVentas}>
            <div className={s.itemTitle}>Objetivo</div>
            <div className={s.itemResult_negative}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={s.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={s.itemVentas}>
            <div className={s.itemTitle}>Semana Pasada</div>
            <div className={s.itemResult_positive}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={s.resultAmount}>{`$ ${gananciasSemanaAnterior().toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</div>
            </div>
          </div>
          <div className={s.itemVentas}>
            <div className={s.itemTitle}>Mes Pasado</div>
            <div className={s.itemResult_positive}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={s.resultAmount}>{`$ ${gananciasDelMes.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentasTotales;
