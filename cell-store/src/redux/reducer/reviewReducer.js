import {
  GET_PRODUCT_REVIEWS,
  GET_USER_REVIEWS,
  ALL_REVIEWS,
} from "../actions/reviewActions";

const initialState = {
  reviews: [],
  review: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case GET_USER_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    case GET_PRODUCT_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
  }
}
