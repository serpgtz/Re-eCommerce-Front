import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  cardUserContainer,
  tableUserAdmin,
  th,
  td,
  tableBoxTrue,
  tableBoxFalse,
  tdActions,
} from "./Dashboard.module.css";
import Delete from "./Delete";

const UsersContainer = ({ users, slideIndex, slideIndex2 }) => {
  const [modbox, setModBox] = useState(false);
  const handleModBox = () => {
    setModBox(!modbox);
  };
  return (
    <div className={cardUserContainer}>
      <table className={tableUserAdmin}>
        <tr>
          <th className={th}>NOMBRE</th>
          <th className={th}>E-MAIL</th>
          <th className={th}>ACTIONS</th>
        </tr>
        {users?.length
          ? users?.slice(slideIndex, slideIndex2).map((usuario) => (
              <tr key={usuario.id}>
                <td className={td}>{usuario.username}</td>
                <td className={td}>{usuario.email}</td>
                <td className={tdActions}>
                  {usuario.admin === true ? (
                    <div key={usuario.id + "table"} className={tableBoxTrue}>
                      -No autorizadas-
                    </div>
                  ) : (
                    <div
                      key={usuario.id + "editable"}
                      className={tableBoxFalse}
                      onClick={handleModBox}
                    >
                      Editar
                    </div>
                  )}
                </td>
              </tr>
            ))
          : null}
        {modbox === true ? (
          <>
            <dialog open>
              <p>Detalles de usuario</p>
              {users?.slice(slideIndex, slideIndex2).map((usuario) => (
                <>
                  <p>{usuario.id}</p>
                  <p>{usuario.username}</p>
                  <p>{usuario.email}</p>
                  <button>Coronar como admin</button>
                  <Delete />
                </>
              ))}
            </dialog>
          </>
        ) : (
          ""
        )}
      </table>
    </div>
  );
};

export default UsersContainer;
