import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyUser } from "../../redux/actions/userActions";
import s from "../Dashboard/FormDash.module.css";
import { Validator } from "../Dashboard/FormValidate";
const FormDash = ({ users }) => {
  const dispatch = useDispatch();
  const [idUser, setIdUser] = useState("");
  const [error, setError] = useState({});
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
    console.log(putForm.admin);

    setError(
      Validator({
        ...putForm,
        [e.target.name]: e.target.value,
      })
    );
    console.log(error);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyUser(idUser, putForm));
  };

  return (
    <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
      <select onChange={(e) => handleId(e)}>
        <option value="">Usuarios...</option>
        {users.map((el) => (
          <option key={el._id} value={el._id}>
            {el.username}
          </option>
        ))}
      </select>
      <label className={s.labelInput}>
        Nombre:
        <input
          className={s.input2}
          type="text"
          name="username"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className={s.labelInput}>
        {error.username && <p className={s.danger}>{error.username}</p>}
        E-mail:
        <input
          className={s.input2}
          type="text"
          name="email"
          placeholder="e-mail del usuario"
          onChange={(e) => handleChange(e)}
        />
      </label>
      {error.email && <p className={s.danger}>{error.email}</p>}
      <label className={s.labelInput}>
        ¿Admin?
        <input
          type="checkbox"
          name="admin"
          id="admin"
          value={true}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="admin">Admin</label>
        {error.admin && <p className={s.danger}>{error.admin}</p>}
      </label>

      {error.admin && <p className={s.danger}>{error.admin}</p>}
      <button
        className={s.button}
        type="submit"
        disabled={Object.keys(error).length > 0 || putForm.username === ""}
      >
        Cambiar
      </button>
    </form>
  );
};

export default FormDash;
