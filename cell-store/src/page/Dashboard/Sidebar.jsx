import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
/* import LocalShippingIcon from "@mui/icons-material/LocalShipping"; */
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Badge from '@mui/material/Badge';
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from '@mui/icons-material/Category';
import CopyrightIcon from '@mui/icons-material/Copyright';
/* import InsertChartIcon from "@mui/icons-material/InsertChart"; */
/* import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications"; */
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MailIcon from '@mui/icons-material/Mail';
/* import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined"; */
/* import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined"; */
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ReviewsIcon from '@mui/icons-material/Reviews';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
/* import { DarkModeContext } from "../../../context/darkModeContext"; */
/* import { useContext } from "react"; */
/* import { changeTheme } from '../../../redux/actions'; */
import s from './Sidebar.module.css'

const Sidebar = () => {
  //const { dispatch } = useContext(DarkModeContext);
  //const { allComments } = useSelector((state) => state.dashboard);
  // const dispatch = useDispatch();
  const [ notification, setNotification ] = React.useState(0);

 /*  React.useEffect(() => {
    // Notification
    if(allComments?.length > 0){
      let resetNotification = 0;
      allComments.map((comment)=>{
        if(comment.answer === null){
          resetNotification += 1
        }
      })
    setNotification(resetNotification);
    }
  },[allComments]); */
  
  return (
    <div className={s.sidebar}>
      <div className={s.top}>
        
          <span className={s.logo}>CellStore <i className ={s.adminLogo}>ADMIN</i></span>
        
      </div>
      <hr className={s.hrS}/>
      <div className={s.center}>
        <ul className={s.centerlist}>
          <p className={s.titleSid}>PRINCIPAL</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
          <li className={s.liSid}>
            <DashboardIcon className={s.iconSid} />
            <span className={s.spanSid}>Dashboard</span>
          </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li className={s.liSid}>
              <HomeIcon className={s.iconSid} />
            <span className={s.spanSid}>Home</span>
          </li>
          </Link>
          <p className={s.titleSid}>LISTAS</p>
          <Link to="/admin/userslist" style={{ textDecoration: "none" }}>
            <li className={s.liSid}>
                  <PersonOutlineIcon className={s.iconSid} />
              <span className={s.spanSid}>Usuarios</span>
            </li>
          </Link>
          <Link to="/admin/productlist" style={{ textDecoration: "none" }}>
            <li className={s.liSid}>
                  <StoreIcon className={s.iconSid} />
              <span className={s.spanSid}>Productos</span>
            </li>
          </Link>
          <Link to="/admin/ordersList" style={{ textDecoration: "none" }}>
            <li className={s.liSid}>
                  <CreditCardIcon className={s.iconSid} />
              <span className={s.spanSid}>Ordenes</span>
            </li>
          </Link>
          <Link to="/admin/reviewslist" style={{ textDecoration: "none" }}>
            <li className={s.liSid}>
                  <ReviewsIcon className={s.iconSid} />
              <span className={s.spanSid}>Reviews</span>
            </li>
          </Link>
          {/* <Link to="/admin/categories" style={{ textDecoration: "none" }}>
            <li className={s.liSid}>
                  <CategoryIcon className={s.iconSid} />
              <span className={s.spanSid}>Categorias</span>
            </li>
          </Link> */}
          {/* <Link to="/admin/brands" style={{ textDecoration: "none" }}>
            <li className={s.liSid}>
                  <CopyrightIcon className={s.iconSid} />
              <span className={s.spanSid}>Marcas</span>
            </li>
          </Link> */}
          {/* <br/>
          <p className={s.titleSid}>ÚTIL</p> */}
          
          {/* <Link to="/admin/notifications" style={{ textDecoration: "none" }}>
            <li className={s.liSid}>
              <Badge badgeContent={notification} color="error" style={{ marginLeft: "0px" }}>
                <MailIcon className={s.iconSid} />
              </Badge>
              <span className={s.span}>Notificaciones</span>
            </li>
          </Link> */}
         
          <p className={s.titleSid}>USUARIO</p>
          <Link to="/account/profile" style={{ textDecoration: "none" }}>
          <li className={s.liSid}>
              <AccountCircleOutlinedIcon className={s.iconSid} />
            <span className={s.spanSid}>Perfil</span>
          </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li className={s.liSid}>
              <ExitToAppIcon className={s.iconSid} />
            <span className={s.spanSid}>Salir</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
