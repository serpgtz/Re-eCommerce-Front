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
  trCon
} from "./Dashboard.module.css";
import UserWindow from "./UserWindow";

const UsersContainer = ({ users, slideIndex, slideIndex2 }) => {
  const [modbox, setModBox] = useState(false);
  const handleModBox = () => {
    setModBox(!modbox);
  };
  return (
    <div className={cardUserContainer}>
      <table className={tableUserAdmin}>
        <tr className={trCon}>
          <th className={th}>NOMBRE</th>
          <th className={th}>E-MAIL</th>
          <th className={th}>ACTIONS</th>
        </tr>
        {users?.length
          ? users?.slice(slideIndex, slideIndex2).map((usuario) => (
              <tr key={usuario._id}>
                <td className={td}>{usuario.username}</td>

                <td className={td}>{usuario.email}</td>
                <td className={tdActions} value={usuario}>
                  {usuario.admin === true ? (
                    <div key={usuario._id + "table"} className={tableBoxTrue}>
                      -No autorizadas-
                    </div>
                  ) : (
                    <div
                      key={usuario._id + "editable"}
                      className={tableBoxFalse}
                      onClick={handleModBox}
                    >
                      Editar
                    </div>
                  )}
                  {modbox === true && (
                    <UserWindow modbox={modbox} user={usuario} />
                  )}
                </td>
              </tr>
            ))
          : null}
      </table>
    </div>
  );
};

export default UsersContainer;
