import React from 'react'
import { useSelector } from "react-redux";

import s from "./VentasTotales.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
/* import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; */
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const VentasTotales = () => {
  /* const { totalSalesToday, totalSales, lastSalesWeek, lastSalesMonth } = useSelector((state) => state.dashboard); */
  //const allusers = useSelector((state) => state.user.users);
  /* const porcentajeventa = Math.round(totalSalesToday/totalSales*100) */

  return (
    <div className={s.featured}>
      <div className={s.top}>
        <h1 className={s.title}>Ingresos Totales</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={s.bottomVentas}>
        <div className={s.featuredChart}>
          <CircularProgressbar value={20/* porcentajeventa */} text={`${16/* porcentajeventa */} %`} strokeWidth={5} />
        </div>
        <p className={s.title}>Ventas totales realizadas hoy</p>
        <p className={s.amount}>{Math.round(36/* totalSalesToday */)}</p>
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
              <div className={s.resultAmount}>{Math.round(76/* lastSalesWeek */)}</div>
            </div>
          </div>
          <div className={s.itemVentas}>
            <div className={s.itemTitle}>Mes Pasado</div>
            <div className={s.itemResult_positive}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={s.resultAmount}>{Math.round(99/* lastSalesMonth */)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentasTotales;
