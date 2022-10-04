import {
  USER,
  LOGIN_ERROR,
  RESET_USER,
  TOKEN,
  ALL_USERS,
  RESET_ERROR,
  GET_BY_NAME,
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

    case RESET_ERROR:
      return {
        ...state,
        error: {},
      };
    case GET_BY_NAME:
      return {
        ...state,
        users:action.payload
      }
    
    default:
      return {
        ...state,
      };
  }
}
