<<<<<<< HEAD
=======

>>>>>>> 52d2f6410995d4a9dda627c56ec009658e03f1c9
import {
  USER,
  LOGIN_ERROR,
  RESET_USER,
  TOKEN,
  ALL_USERS,
<<<<<<< HEAD
  RESET_ERROR,
} from "../actions/userActions";
=======
 RESET_ERROR
} from "../actions/userActions";

>>>>>>> 52d2f6410995d4a9dda627c56ec009658e03f1c9

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
    default:
      return {
        ...state,
      };
  }
}
