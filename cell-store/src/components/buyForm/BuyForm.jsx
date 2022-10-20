import React, { useState, forwardRef } from "react";
import style from "./BuyForm.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { orderProduct } from "../../redux/actions/productActions";
import { errorInputForm } from "./controlForm";

const BuyForm = ({ error, location }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [errorf, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    info: "",
    address_user: "",
  });

  const handleClick = () => {
    setOpen(true);

    if (localStorage.getItem("user")) {
      const productArray = JSON.parse(localStorage.getItem("cart"));

      const id = JSON.parse(localStorage.getItem("user"));

      dispatch(orderProduct(productArray, id._id, location, input));
    } else {
      navigate("/account/login");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(errorInputForm({ ...input, [e.target.name]: e.target.value }));
  };

  console.log(input);
  const handleOnSubmit = (e) => {
    e.preventDefault();

    setInput({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      info: "",
      address_user: "",
    });
  };

  console.log(Object.values(input).join("").length);

  return (
    <>
      {error && (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          Necesitas elegir la Sucursal — <strong>RETIRAR EN</strong>
        </Alert>
      )}
      <form className={style.form} onSubmit={handleOnSubmit}>
        <div className={style.title}>
          <h2>Informacion Personal</h2>
        </div>
        <TextField
          error={errorf.name && true}
          helperText={errorf.name}
          name="name"
          onChange={handleOnChange}
          value={input.name}
          label="Nombre"
          variant="outlined"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", height: "6ch" },
          }}
        />

        <TextField
          error={errorf.lastName && true}
          helperText={errorf.lastName}
          name="lastName"
          onChange={handleOnChange}
          value={input.lastName}
          label="Apellido"
          variant="outlined"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", height: "6ch" },
          }}
        />

        <TextField
          error={errorf.email && true}
          helperText={errorf.email}
          name="email"
          onChange={handleOnChange}
          value={input.email}
          label="Email"
          variant="outlined"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch", height: "6ch" },
          }}
        />

        <TextField
          error={errorf.phone && true}
          helperText={errorf.phone}
          name="phone"
          onChange={handleOnChange}
          value={input.phone}
          label="Celular"
          variant="outlined"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch", height: "6ch" },
          }}
        />

        <TextField
          name="info"
          onChange={handleOnChange}
          value={input.info}
          label="Informacion adicional"
          variant="outlined"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch", height: "15ch" },
          }}
        />

        <TextField
          error={errorf.address_user && true}
          name="address_user"
          helperText={errorf.address_user}
          onChange={handleOnChange}
          value={input.address_user}
          label="Domicilio"
          variant="outlined"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch", height: "6ch" },
          }}
        />

        {!error && Object.values(input).join("").length !== 0 && (
          <input
            type="submit"
            disabled={Object.keys(errorf).length !== 0 && true}
            onClick={handleClick}
            value="Finalizar la Orden"
          ></input>
        )}
      </form>
      {
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Tu orden fue Registrada!
          </Alert>
        </Snackbar>
      }
    </>
  );
};

export default BuyForm;
