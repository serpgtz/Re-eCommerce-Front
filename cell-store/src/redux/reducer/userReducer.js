import {
  USER,
  LOGIN_ERROR,
  RESET_USER,
  TOKEN,
  ALL_USERS,
} from "../actions/userActions";

const initialState = {
  user: {},
  users: [],
  error: {},
  token: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    case ALL_USERS:
      console.log("Hoola, soy el dispatch");
      return {
        ...state,
        users: action.payload,
      };
    case RESET_USER:
      return {
        ...state,
        user: {},
        token: {},
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
