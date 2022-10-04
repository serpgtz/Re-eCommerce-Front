import axios from "axios";
import { useActionData } from "react-router-dom";

export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAILS = "GET_DETAILS";
export const RESET = "RESET";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const PRODUCTS_PER_PAGE = "PRODUCTS_PER_PAGE";
export const CHANGE_BY_NAME = "CHANGE_BY_NAME";
export const CHANGE_BY_NAME2 = "CHANGE_BY_NAME2";
export const GET_FILTERED = "GET_FILTERED";
export const NOT_FOUND = "NOT_FOUND";
export const HIGHER_PRICE = "++PRICE";
export const LOWER_PRICE = "--_PRICE";
export const TOP_RATED = "TOP_RATED";

axios.defaults.baseURL = "http://localhost:3001";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get("/products");

      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getProductByName(name) {
  return async function (dispatch) {
    try {
      const product = await axios.get(`/products?name=${name}`);
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: product.data,
      });
    } catch (error) {
      dispatch({
        type: NOT_FOUND,
        payload: { msj: "error" },
      });
      console.log(error);
    }
  };
}

export function getDetailId(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get("/product/" + id);
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFilter(query) {
  return async function (dispatch) {
    console.log(query);
    try {
      if (query === "cell") await axios.get(`/category?${query}=true`);
      if (query === "phoneCover") await axios.get(`/category?${query}=true`);
      if (query === "headphones") await axios.get(`/category?${query}=true`);
      if (query === "charger") await axios.get(`/category?${query}=true`);
      return dispatch({
        type: GET_FILTERED,
        payload: query.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function resetState() {
  return {
    type: RESET,
  };
}

export function postProduct(form, navigate) {
  return function (dispatch) {
    return axios
      .post("/product", form)
      .then((res) => res.data)
      .then((payload) => {
        alert("Se ha creado un producto correctamente", payload);
        //Planear redirigir a ruta con el id de reponse para la carga de category.
        console.log(payload);
        navigate(`/interForm/${payload._id}`);
      })
      .catch((e) => {
        console.error(e);
        alert("Ocurrió un error, no fue posible crear el producto");
        navigate("/");
      });
  };
}

export function postCategory(form, navigate, location) {
  return function (dispatch) {
    return axios
      .post("/category", form)
      .then((res) => res.data)
      .then((payload) => {
        alert("Se completo exitosamente la carga");
        console.log(payload);
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
        alert("Surgio un error vuelva a intentarlo");
        navigate(location.pathname);
      });
  };
}

export function higherPrice() {
  return {
    type: "++_PRICE",
  };
}

export function lowerPrice() {
  return {
    type: "--_PRICE",
  };
}

export function topRated() {
  return {
    type: "TOP_RATED",
  };
}

export function changePage(page) {
  return function (dispatch) {
    return dispatch({
      type: CHANGE_PAGE,
      payload: page,
    });
  };
}

export function getProductsPerPage(page) {
  return async function (dispatch) {
    try {
      let products = await axios.get(
        `http://localhost:3001/products?page=${page}&&limit=8`
      );
      return dispatch({
        type: PRODUCTS_PER_PAGE,
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function ChangeByName() {
  return function (dispatch) {
    return dispatch({
      type: CHANGE_BY_NAME,
      payload: "true",
    });
  };
}
export function ChangeByName2() {
  return function (dispatch) {
    return dispatch({
      type: CHANGE_BY_NAME2,
      payload: "false",
    });
  };
}

