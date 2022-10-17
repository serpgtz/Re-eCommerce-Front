import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  getProductsPerPage,
} from "../../redux/actions/productActions";
import s from "../Paginado/Paginado.module.css";
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack';

export default function () {
  let limit = 8;
  const productsTotal = useSelector((state) => state.product.products);
  const products2 = useSelector((state) => state.product.products2);
  const dispatch = useDispatch();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(productsTotal.length / limit); i++) {
    pageNumbers.push([i]);
  }

  function handlePage(e) {
    e.preventDefault();
   // console.log("paginado", e.target.innerText);
   console.log( ' ', e )
    dispatch(changePage(e.target.innerText));
    dispatch(getProductsPerPage(e.target.innerText));
  }

  if (productsTotal.length < limit) {
    return null;
  } else {
    return (
      <div className={s.container}>
        {/* <ul>
          <div className={s.subcontainer}>
            {pageNumbers &&
              pageNumbers.map((n, index) => {
                return (
                  <li
                    className={
                      parseInt(products2.currentPage) === index + 1
                        ? s.paginadoCurrent
                        : s.paginado
                    }
                    value={n}
                    onClick={(e) => handlePage(e)}
                  >
                    {n}
                  </li>
                );
              })}
          </div>
        </ul> */}

<Stack spacing={2}>
      <Pagination size="large" count={pageNumbers.length} variant="outlined"  onChange={ handlePage} color='primary' hidePrevButton hideNextButton  />
      {/* <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled /> */}
    </Stack>
      </div>
    );
  }
}
