import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserData } from "../../redux/actions/userActions";
import Datos from "./Datos";
import { useState } from "react";
import Button from '@mui/material/Button'
import s from "./Profile.module.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ReviewsByUser from "./ReviewsByUser";
import { getReviewByUser, getAllReviews } from "../../redux/actions/reviewActions";

const Profile = () => {
  const dispatch = useDispatch();
  //Usuario normal
  const user = useSelector((state) => state.user.user);

  const [input, setInput] = useState("")


  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    (user._id) ? dispatch(getReviewByUser(user._id)) : console.log('no hay ID');
  }, [dispatch, user._id]);

  function handleClick(e) {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div className={s.container}>
      <div className={s.user}>
        <AccountBoxIcon
          color="primary"
          fontSize="large" />
        <h1>Hola {user.name}</h1>
      </div>
      <div className={s.buttons} >

        <Button variant="outlined" color="primary"
          onClick={() => setInput("mis datos")}>
          Mis Datos
        </Button>
        {user?.admin === true ? (
          null
        ) :
          <Button variant="outlined" color="primary"
            onClick={() => setInput("reviews")}>
            Reviews
          </Button>

        }
        {user?.admin === true ? (
          null
        ) :
          <Button variant="outlined" color="primary"
            onClick={() => setInput("reviews")}>
            Favoritos
          </Button>
        }
        {user?.admin === true ? (
          null
        ) :
          <Button variant="outlined" color="primary"
            onClick={() => setInput("reviews")}>
            Historial de compras
          </Button>
        }
        {/* <ul >
              <li onClick={()=>setInput("mis datos")} >Mis datos</li>
              <li onClick={()=>setInput("reviews")}>Reviews</li>
            </ul> */}

      </div>

      <div className={s.display}>
        {input === "mis datos" && <Datos />}

        {input === "reviews" && <ReviewsByUser />}
      </div>
    </div>
  )
};

export default Profile;
