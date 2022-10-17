import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserWindow from "./UserWindow";

const UsersContainer = ({ users }) => {
  const [modbox, setModBox] = useState(false);
  const handleModBox = () => {
    setModBox(!modbox);
  };

  const rows = users.map((u) => ({
    id: u._id,
    name: u.username,
    admin: u.admin,
    email: u.email,
    confirmed: u.confirmed,
  }));

  const productColumns = [
    { field: "id", headerName: "ID Único", width: 240 },
    {
      field: "name",
      headerName: "Nombre",
      width: 180,
      renderCell: (params) => {
        return <div className="userName">{params.row.name}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "confirmed",
      headerName: "Confirmado",
      width: 100,
    },
    {
      field: "admin",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => {
        return (
          <div /*className = {s.cellTableBox}*/>
            {params.row.admin === false && (
              <Link
                to={`/admin/userslist/edit/${params.row.id}`}
                style={{ textDecoration: "none" }}
              >
                <div /*className = {s.accessButton}*/>Edit</div>
              </Link>
            )}
            {params.row.admin === true && (
              <div /*className = {s.accessRestringed}*/>
                -ACCIONES PROHIBIDAS-
              </div>
            )}

            {/* <div className="deleteButton"
              onClick={() => handleDelete(params.row.id)}>
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "60%",
        marginTop: "4rem",
        marginLeft: "0.25rem",
      }}
    >
      <DataGrid
        autoHeight
        rows={rows}
        columns={productColumns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default UsersContainer;
