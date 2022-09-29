<<<<<<< HEAD
import { GET_ALL_PRODUCTS, GET_DETAILS, RESET } from "./actions";
=======
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_DETAILS,
  RESET,
} from "./actions";
>>>>>>> 51a7b1571c891498c8b49fd0951547689d4c34b8

const initialState = {
  products: [],
  detail: [],
}


export default function rootReducer(state = initialState, action) {

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
