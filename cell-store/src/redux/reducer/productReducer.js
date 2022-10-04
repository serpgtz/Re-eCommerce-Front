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
      const productsSorted = state.products.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (b.price > a.price) {
          return -1;
        }
        return 0;
      });
      const productsPaginated = productsSorted.slice(0, 7);
      return {
        ...state,
        products: productsPaginated,
      };
    case LOWER_PRICE:
      console.log("ENTRÉ A SORT, PAPU");
      return {
        ...state,
        products: state.products2.sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          }
          if (b.price < a.price) {
            return -1;
          }
          return 0;
        }),
      };
    case TOP_RATED:
      console.log("ENTRÉ A SORT, PAPU");
      return {
        ...state,
        products: state.products2.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          }
          if (b.rating > a.rating) {
            return -1;
          }
          return 0;
        }),
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
