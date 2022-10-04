import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyUser } from "../../redux/actions/userActions";

const FormDash = ({ users }) => {
  const dispatch = useDispatch();
  const [idUser, setIdUser] = useState("");
  const [putForm, setPutForm] = useState({
    username: "",
    email: "",
    admin: false,
  });
  const handleId = (e) => {
    e.preventDefault();
    setIdUser(e.target.value);
  };
  const handleChange = (e) => {
    setPutForm({
      ...putForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyUser(idUser, putForm));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <select onChange={(e) => handleId(e)}>
        <option value="">Usuarios...</option>
        {users.map((el) => (
          <option key={el._id} value={el._id}>
            {el.username}
          </option>
        ))}
      </select>
      <label>
        Nombre:
        <input type="text" name="username" onChange={(e) => handleChange(e)} />
      </label>
      <label>
        E-mail:
        <input
          type="text"
          name="email"
          placeholder="e-mail del usuario"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        ¿Admin?
        <input
          type="checkbox"
          name="admin"
          id="admin"
          value={true}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="admin">Admin</label>
        <input
          type="checkbox"
          name="admin"
          id="noesadmin"
          value={false}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="noesadmin">Plebe</label>
      </label>
      <button type="submit">Cambiar</button>
    </form>
  );
};

export default FormDash;
