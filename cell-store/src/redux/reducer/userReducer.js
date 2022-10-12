import {
  USER,
  LOGIN_ERROR,
  RESET_USER,
  TOKEN,
  ALL_USERS,
  RESET_ERROR,
  GET_BY_NAME,
  REGISTER_ERROR,
  ERROR_CONFIRM_TOKEN,
  RESPONSE_EMAIL,
  RESPONSE_CHANGE_PASSWORD_FORGOT,
  RESPONSE_NEW_PASSWORD
} from "../actions/userActions";

const initialState = {
  user: {},
  users: [],
  error: {},
  token: {},
  error_register : {},
  error_confirm_token : {},
  response_email : {},
  response_change_password_forgot : {},
  response_newPassword : {}
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
        error_register : {}
      };
    case GET_BY_NAME:
      return {
        ...state,
        users: action.payload,
      };

     case REGISTER_ERROR:
      return {
        ...state,
        error_register : action.payload
      } 
    
      case ERROR_CONFIRM_TOKEN:
        return {
          ...state,
          error_confirm_token : action.payload
        }
       case RESPONSE_EMAIL:
         return {
          ...state,
          response_email : action.payload
         }
      case RESPONSE_CHANGE_PASSWORD_FORGOT:
        return {
          ...state,
          response_change_password_forgot : action.payload
        }

      case RESPONSE_NEW_PASSWORD :
        return {
          ...state,
          response_newPassword : action.payload
        }   
    default:
      return {
        ...state,
      };
  }
}
