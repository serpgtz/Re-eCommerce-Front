import axios from "axios";


export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAILS = "GET_DETAILS";
export const RESET = "RESET";

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
        alert("Se a Creado un Producto Correctamente", payload);
        //Planear redirigir a ruta con el id de reponse para la carga de category.
        console.log(payload)
        navigate(`/interForm/${payload._id}`);
      })
      .catch((e) => {
        console.error(e);
        alert("Ocurrio un Error, No fue posible crear el producto");
        navigate("/");
      });
  };
}
