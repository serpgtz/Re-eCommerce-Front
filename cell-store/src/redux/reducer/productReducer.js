import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_DETAILS,
  RESET,
  CHANGE_PAGE,
  PRODUCTS_PER_PAGE,
  CHANGE_BY_NAME,
  CHANGE_BY_NAME2,
  GET_FILTERED,
  NOT_FOUND,
  HIGHER_PRICE,
  LOWER_PRICE,
  TOP_RATED,
  LINK_MP,
  PRODUCTS_FILTER,

} from "../actions/productActions";

const initialState = {
  products: [],
  detail: [],
  products2: [],
  page: 1,
  byName: "false",
  productFilter: [],
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
    case NOT_FOUND:
      return {
        ...state,
        products: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_FILTERED:
      return {
        ...state,
        products: action.payload,
      };
    case HIGHER_PRICE:
      return {
        ...state,
        products: action.payload,
      };
    case LOWER_PRICE:
      return {
        ...state,
        products: action.payload,
      };
    case TOP_RATED:
      return {
        ...state,
        products: action.payload,
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

      case LINK_MP:
        return {
          ...state,
          linkMP : action.payload
        }
       case PRODUCTS_FILTER:
        return {
          ...state,
          productFilter : action.payload
        }
    default:
      return {
        ...state,
      };
  }
}
