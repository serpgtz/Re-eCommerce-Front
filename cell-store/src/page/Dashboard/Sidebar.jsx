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
      <hr />
      <div className={s.center}>
        <ul className={s.centerlist}>
          <p className={s.title}>MAIN</p>
          <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className={s.icon} />
            <span>Dashboard</span>
          </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <HomeIcon className={s.icon} />
            <span>Home</span>
          </li>
          </Link>
          <p className={s.title}>LISTS</p>
          <Link to="/admin/users/list" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className={s.icon} />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/products/list" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className={s.icon} />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/admin/purchases/list" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className={s.icon} />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/admin/categories" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className={s.icon} />
              <span>Categories</span>
            </li>
          </Link>
          <Link to="/admin/brands" style={{ textDecoration: "none" }}>
            <li>
              <CopyrightIcon className={s.icon} />
              <span>Manufacturers</span>
            </li>
          </Link>
          <br/>
          <p className="title">USEFUL</p>
          
          <Link to="/admin/notifications" style={{ textDecoration: "none" }}>
            <li>
              <Badge badgeContent={notification} color="error" style={{ marginLeft: "0px" }}>
                <MailIcon className={s.icon} />
              </Badge>
              <span>Notifications</span>
            </li>
          </Link>
         
          <p className="title">USER</p>
          <Link to="/account/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className={s.icon} />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className={s.icon} />
            <span>Exit</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
