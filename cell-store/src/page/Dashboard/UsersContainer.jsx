import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import UserWindow from "./UserWindow";

const UsersContainer = ({ users }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
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
      renderCell: (params) => {
        return (
          <div>{params.row.confirmed === true ? "Positivo" : "Negativo"}</div>
        );
      },
    },
    {
      field: "admin",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => {
        return (
          <div /*className = {s.cellTableBox}*/>
            {params.row.admin === false && (
              <div /*className = {s.accessButton}*/>
                {console.log(input)}
                <UserWindow openFormDialog="Editar" />
              </div>
            )}
            {params.row.admin === true && (
              <div /*className = {s.accessRestringed}*/>
                -ACCIONES PROHIBIDAS-
              </div>
            )}
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
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onChange={handleChange}
      />
    </div>
  );
};

export default UsersContainer;
