import React from "react";
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
  //Funciones

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
  //Le pasás cualquiera de las órdenes
  const gananciasPorFiltro = (order) => {
    return order?.map((p) => p.totalPrice).reduce((a, b) => a + b, 0);
  };
  //Fechas
  const hoy = new Date().toISOString().slice(0, 10);
  const mes = hoy.slice(0, 7);
  const mesAnterior = formato(
    mes.replace(mesAReemplazar(mes), mesAReemplazar(mes) - 1)
  );
  //Órdenes
  const todayOrders = orders?.filter((t) => t.date?.slice(0, 10) === hoy);

  const ordersDelMes = orders?.filter((t) => t.date?.slice(0, 7) === mes);

  /*Ninguna del mes*/
  const ordersPasadas = orders?.filter((t) => t.date?.slice(0, 7) !== mes);
  //Pasadas
  const ordersDelMesAnterior = ordersPasadas?.filter(
    (t) => t.date?.slice(0, 7) === mesAnterior
  );

  //Ganancias
  const gananciasDelDia = gananciasPorFiltro(todayOrders);

  const gananciasSemanaAnterior = () => {
    const fechaAReemplazar = hoy.slice(8, 10);
    const semanaAtras = hoy.replace(fechaAReemplazar, hoy.slice(8, 10) - 7);
    const ganancias = orders?.filter((t) => t.date?.slice(0, 10) > semanaAtras);
    return gananciasPorFiltro(ganancias);
  };

  const gananciasDelMes = gananciasPorFiltro(ordersDelMes);

  const gananciasDelMesAnterior = gananciasPorFiltro(ordersDelMesAnterior);

  const ganancias3 = () => {
    const tresMesesAtras = formato(
      mesAnterior?.replace(
        mesAReemplazar(mesAnterior),
        mesAReemplazar(mesAnterior) - 2
      )
    );
    const ganancias = orders?.filter(
      (t) => t.date?.slice(0, 7) < tresMesesAtras
    );
    return gananciasPorFiltro(ganancias);
  };
  // console.log("dia", gananciasDelDia);

  // console.log("semana", gananciasSemanaAnterior());

  // console.log("Mes", gananciasDelMes);

  // console.log("Estos 3 Meses", ganancias3());

  /* const { totalSalesToday, totalSales, lastSalesWeek, lastSalesMonth } = useSelector((state) => state.dashboard); */
  //const allusers = useSelector((state) => state.user.users);

  const ventasDelDía =
    /*() => {*/
    // const hoy = new Date().toISOString().slice(0, 10);
    // const todayOrders = orders?.filter((t) => t.date?.slice(0, 10) === hoy);
    /* return */ todayOrders.length;
  // };
  // const ventasRealizadasHoy = ventasDelDía();

  // const ventasDeHoy = () => {
  //   const hoy = new Date().toISOString().slice(0, 10);
  //   const todayOrders = orders?.filter((t) => t.date?.slice(0, 10) === hoy);
  //   return todayOrders;
  // };
  const ventasHoy = todayOrders;
  const totalDeVentasHoy = gananciasDelDia;
  // ventasHoy
  //   .map((p) => p.totalPrice)
  //   .reduce((a, b) => a + b, 0);

  const porcentajeVenta = Math.round(
    (totalDeVentasHoy / gananciasTotales) * 100
  );

  return (
    <div className={s.featured}>
      <div className={s.top}>
        <h1 className={s.title}>Ingresos Totales</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={s.bottomVentas}>
        <div className={s.featuredChart}>
          <CircularProgressbar
            value={porcentajeVenta}
            text={`${porcentajeVenta} %`}
            strokeWidth={5}
          />
        </div>
        <p className={s.title}>Ventas totales realizadas hoy</p>
        <p className={s.amount}>{ventasDelDía}</p>
        <p className={s.desc}>
          Procesamiento de transacciones anteriores. Es posible que no se
          incluyan los últimos pagos.
        </p>
        <div className={s.summary}>
          <div className={s.itemVentas}>
            <div className={s.itemTitle}>Objetivo</div>
            <div className={s.itemResult_negative}>
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className={s.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={s.itemVentas}>
            <div className={s.itemTitle}>Semana Pasada</div>
            <div className={s.itemResult_positive}>
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div
                className={s.resultAmount}
              >{`$ ${gananciasSemanaAnterior().toLocaleString("es", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}</div>
            </div>
          </div>
          <div className={s.itemVentas}>
            <div className={s.itemTitle}>Mes Pasado</div>
            <div className={s.itemResult_positive}>
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div
                className={s.resultAmount}
              >{`$ ${gananciasDelMesAnterior.toLocaleString("es", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentasTotales;
