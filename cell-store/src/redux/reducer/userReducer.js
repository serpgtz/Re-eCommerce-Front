import {USER, LOGIN_ERROR} from '../actions/userActions'

const initialState = {
   user : {},
   error : {}
}


export default function userReducer(state = initialState, action) {

     switch(action.type) {
            case USER :
                return {
                    ...state,
                    user : action.payload
                }

            case LOGIN_ERROR  :
                return {
                    ...state,
                    error : action.payload
                }   
        default : return {
            ...state
        }
     }
}