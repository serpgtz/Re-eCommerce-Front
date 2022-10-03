import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_DETAILS,
  RESET,
  CHANGE_PAGE,
  PRODUCTS_PER_PAGE,
  CHANGE_BY_NAME,
  CHANGE_BY_NAME2,
} from "../actions/productActions";

const initialState = {
  products: [],
  detail: [],
  products2: [],
  page: 1,
  byName: "false",
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    case RESET:
      return {
        ...state,
        detail: [],
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case PRODUCTS_PER_PAGE:
      return {
        ...state,
        products2: action.payload,
      };
    case CHANGE_BY_NAME:
      return {
        ...state,
        byName: action.payload,
      };
    case CHANGE_BY_NAME2:
      return {
        ...state,
        byName: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
