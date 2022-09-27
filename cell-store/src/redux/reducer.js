import { GET_ALL_PRODUCTS } from "./actions";

const initialState = {
    products : [],
    detail: [],
}


export default function rootReducer(state = initialState , action) {

    switch(action.type) {
        case GET_ALL_PRODUCTS: 
          return {
            ...state,
            products : action.payload
          }
        case GET_DETAILS :
          return {
              ...state,
              detail: action.payload,
          }
        case RESET :
            return {
                ...state,
                detail: []
            }

          default : return {
            ...state
          }
    }
}