import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteUser, modifyUser } from "../../redux/actions/userActions";

export default function UserWindow({ openFormDialog, user }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteUser(user.id));
    setOpen(false);
    alert("Se eliminó correctamente, actualiza para ver los cambios");
  };
  const handlePut = (e) => {
    e.preventDefault();
    dispatch(modifyUser(user.id, {}));
    setOpen(false);
    alert("Se modificó correctamente, actualiza para ver los cambios");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {openFormDialog}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>Edite el rol de {user.name}</DialogContentText>
          <FormControl>
            <InputLabel htmlFor="admin">Admin</InputLabel>
            <Input
              id="admin"
              aria-describedby="my-helper-text"
              type="checkbox"
            />
            <FormHelperText id="my-helper-text">
              Un administrador no puede editar a otros.
            </FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => handlePut(e)}>Aplicar</Button>
          <Button onClick={(e) => handleDelete(e)}>ELIMINAR</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// export default UserWindow;
