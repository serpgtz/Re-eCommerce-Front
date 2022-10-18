import {
  Avatar,
  Button,
  Container,
  Dialog,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { cambiarPassword, modifyUser } from "../../redux/actions/userActions";

const Settings = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePassword = (id) => {
    setOpen(true);
    dispatch(cambiarPassword(id, user.password, user.newPass));
  };

  const handlePut = (id) => {
    dispatch(modifyUser(id, {}));
  };

  return (
    <Container>
      <Box color={"primary"}>
        <Typography>Foto de perfil</Typography>
        <Avatar alt="Fotinha"></Avatar>
        <InputLabel htmlFor="username">Nombre de usuario:</InputLabel>
        <Input id="username" aria-describedby="username-helper" type="text" />
        <FormHelperText id="username-helper">
          Utiliza otro nombre de usuario
        </FormHelperText>
        <InputLabel htmlFor="uEmail">Email:</InputLabel>
        <Input id="uEmail" aria-describedby="email-helper" type="email" />
        <FormHelperText id="email-helper">
          Utiliza otro correo electrónico
        </FormHelperText>
        <Button variant="outlined" onClick={handleClickOpen}>
          Quiero cambiar mi contraseña
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <InputLabel htmlFor="pwd">Contraseña:</InputLabel>
          <Input id="pwd" aria-describedby="pwd-helper" type="password" />
          <FormHelperText id="pwd-helper">
            Pon tu contraseña actual
          </FormHelperText>
          <InputLabel htmlFor="npwd">Nueva contraseña:</InputLabel>
          <Input id="npwd" aria-describedby="npwd-helper" type="password" />
          <FormHelperText id="npwd-helper">
            Escribe tu nueva contraseña.
          </FormHelperText>
          <Button onClick={handlePassword}>Guardar contraseña</Button>
        </Dialog>
        <Button onClick={handlePut}>Guardar cambios</Button>
        <Button>Descartar</Button>
        <Button onClick={() => navigate(-1)}>Volver</Button>
      </Box>
    </Container>
  );
};

export default Settings;
