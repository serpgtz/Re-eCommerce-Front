import { GET_ALL_ORDERS } from "../actions/ordersActions";

const initialState = {
    allOrders: []
  };

  export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_ORDERS:
        return {
          ...state,
          allOrders: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
}