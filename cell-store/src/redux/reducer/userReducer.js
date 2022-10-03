import {USER, LOGIN_ERROR, TOKEN} from '../actions/userActions'

const initialState = {
   user : {},
   error : {},
   token : {}
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
                
            case TOKEN:
                return {
                    ...state,
                    token : action.payload
                }    
        default : return {
            ...state
        }
     }
}