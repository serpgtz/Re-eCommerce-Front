import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../redux/actions/userActions";
import styles from "./Dashboard.module.css";
import FormDash from "./FormDash";
import SearchBardDash from "./SearchBarDashboard";

const Dashboard = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.dashContainer}>
      Dashboard
      <SearchBardDash />
      {/* <input type="text" placeholder="Buscar usuario..." />
      {console.log("holi soy un users")} */}
      <div className={styles.cardUserContainer}>
        Usuarios
        {users.length
          ? users?.map((usuario) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/user/${usuario._id}`}
              >
                <div className={styles.cardUserAdmin}>
                  <p>ID:{usuario._id}</p>
                  <p>Nombre: {usuario.username}</p>
                  <p>e-mail: {usuario.email}</p>
                  <p>
                    Admin: {usuario.admin === true ? "Sí soy" : "No, no soy"}
                  </p>
                </div>
              </Link>
            ))
          : null}
      </div>
      <label>
        Editar usuario
        <FormDash users={users} />
      </label>
      <div>Órdenes</div>
      {/*users.orders */}
      {/* <div>Agregados Recientemente</div>
      {} */}
    </div>
  );
};

export default Dashboard;
