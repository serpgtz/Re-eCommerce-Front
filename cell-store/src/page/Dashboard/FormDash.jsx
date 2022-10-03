import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyUser } from "../../redux/actions/userActions";

const FormDash = ({ users }) => {
  const dispatch = useDispatch();
  const [idUser, setIdUser] = useState("");
  const [putForm, setPutForm] = useState({
    username: "",
    email: "",
    admin: Boolean,
  });
  const handleId = (e) => {
    e.preventDefault();
    setIdUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPutForm({
      ...form,
    });
    dispatch(modifyUser(id, ...form));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <select onChange={(e) => handleId(e)}>
        <option value=""></option>
        {users.map((el) => (
          <option key={el._id} value={el._id}>
            {el.username}
          </option>
        ))}
      </select>
      <label>
        Nombre:
        <input type="text" name="username" />
      </label>
      <label>
        E-mail:
        <input type="text" name="email" placeholder="e-mail del usuario" />
      </label>
      <label>
        ¿Admin?
        <input type="checkbox" name="admin" id="admin" value={true} />
        <label for="admin">Admin</label>
        <input type="checkbox" name="admin" id="noesadmin" value={false} />
        <label for="noesadmin">Plebe</label>
      </label>
      <button>Cambiar</button>
    </form>
  );
};

export default FormDash;
