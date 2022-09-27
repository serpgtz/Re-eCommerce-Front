import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_NAME } from "./actions";

const initialState = {
    products : []
}


export default function rootReducer(state = initialState , action) {

    switch(action.type) {
        case GET_ALL_PRODUCTS: 
          return {
            ...state,
            products : action.payload
          }
        case GET_PRODUCT_BY_NAME:
          return {
            ...state,
            products : action.payload
          }
        default : return {
            ...state
          }
    }
}