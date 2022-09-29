import axios from 'axios'

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_DETAILS = 'GET_DETAILS';
export const RESET = 'RESET';

axios.defaults.baseURL = 'http://localhost:3001'

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
          const products = await axios.get('/products')  
         
          return dispatch({
            type : GET_ALL_PRODUCTS,
            payload : products.data
          })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDetailId (_id) {
  return async function (dispatch) {
   try {
       let json = await axios.get('/products/' + _id);
       return dispatch({
           type: GET_DETAILS,
           payload: json.data
       })
   } catch (error) {
       console.log(error)
   }
  }
}

export function resetState () {
  return {
      type: RESET
  }
}





