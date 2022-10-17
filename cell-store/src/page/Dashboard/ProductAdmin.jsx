import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";

const ProductAdmin = () => {
  const allProducts = useSelector((state) => state.product.products);
  const rows = allProducts.map((p) => ({
    id: p._id,
    name: p.name,
    stock: p.stock,
    exists: p.exists,
    numReviews: p.numReviews,
    price: p.price,
    rating: p.rating,
  }));

  const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return <div className="cellName">{params.row.name}</div>;
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 100,
    },
    {
      field: "price",
      headerName: "Precio",
      width: 100,
    },
    {
      field: "numReviews",
      headerName: "Opiniones",
      width: 100,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 100,
    },
    {
      field: "exists",
      headerName: "Estado",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`${params.row.exists}`}>
            {params.row.exists === true ? "Disponible" : "No disponible"}
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
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
export default ProductAdmin;
