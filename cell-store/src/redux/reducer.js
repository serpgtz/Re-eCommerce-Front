import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_NAME } from "./actions";

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
<<<<<<< HEAD
        case GET_PRODUCT_BY_NAME:
          return {
            ...state,
            products : action.payload
          }
        default : return {
=======
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
>>>>>>> 0d4c7c72138421ca97486d882b744e91436a8c39
            ...state
          }
    }
}