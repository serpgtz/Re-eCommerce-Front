import { USER, LOGIN_ERROR, RESET_USER, TOKEN, RESET_ERROR } from "../actions/userActions";

const initialState = {
  user: {},
  error: {},
  token: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    case RESET_USER:
      return {
        ...state,
        user: {},
        token : {}
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };

     case TOKEN:
      return {
        ...state,
        token : action.payload
      } 

      case RESET_ERROR: 
       return {
        ...state,
        error : {}
       }
    default:
      return {
        ...state,
      };
  }
}