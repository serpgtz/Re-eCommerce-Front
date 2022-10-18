import axios from "axios";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS"

axios.defaults.baseURL = "http://localhost:3001";

export const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const orders = await axios.get("/orders");

      return dispatch({
        type: GET_ALL_ORDERS,
        payload: orders.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};