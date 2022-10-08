import React from "react";
import { Link } from "react-router-dom";
import { cardUserContainer, cardUserAdmin, p } from "./Dashboard.module.css";
import Delete from "./Delete";

const UsersContainer = ({ users, slideIndex, slideIndex2 }) => {
  return (
    <div className={cardUserContainer}>
      {users?.length
        ? users?.slice(slideIndex, slideIndex2).map((usuario) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/user/${usuario._id}`}
            >
              {usuario.admin === true ? null : <Delete id={usuario._id} />}

              <div
                className={cardUserAdmin}
                style={
                  usuario.admin === true
                    ? {
                        background:
                          "linear-gradient(190deg, #9a009a 0%, #fff 91%)",
                      }
                    : null
                }
              >
                <p className={p}>ID:{usuario._id}</p>
                <p className={p}>Nombre: {usuario.username}</p>
                <p className={p}>e-mail: {usuario.email}</p>
                <p className={p}>
                  Admin: {usuario.admin === true ? "Sí soy" : "No, no soy"}
                </p>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};

export default UsersContainer;
