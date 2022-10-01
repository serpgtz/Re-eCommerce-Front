import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_DETAILS,
  RESET,
} from "../actions/productActions";

const initialState = {
  products: [],
  detail: [],
}


export default function productReducer(state = initialState, action) {

  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        products: action.payload
      }
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      }
    case RESET:
      return {
        ...state,
        detail: []
      }

    default: return {
      ...state
    }
  }
}
