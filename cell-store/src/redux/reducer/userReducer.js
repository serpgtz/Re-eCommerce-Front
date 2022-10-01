import {USER} from '../actions/userActions'

const initialState = {
   user : {}
}


export default function userReducer(state = initialState, action) {

     switch(action.type) {
            case USER :
                return {
                    ...state,
                    user : action.payload
                }
        default : return {
            ...state
        }
     }
}