import axios from 'axios'

<<<<<<< HEAD
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME"
=======
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_DETAILS = 'GET_DETAILS';
export const RESET = 'RESET';
>>>>>>> 0d4c7c72138421ca97486d882b744e91436a8c39

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

<<<<<<< HEAD
export function getProductByName(name){
    return async function (dispatch){

     try {
      const product = await axios.get(`/products?name=${name}`)
      return dispatch({
        type:GET_PRODUCT_BY_NAME,
        payload:product.data
     })
     } catch (error) {
        console.log(error)
     }
     
   }

}
   
  
=======
export function getDetailId (id) {
  return async function (dispatch) {
   try {
       let json = await axios.get('/countries/' + id);
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
>>>>>>> 0d4c7c72138421ca97486d882b744e91436a8c39





