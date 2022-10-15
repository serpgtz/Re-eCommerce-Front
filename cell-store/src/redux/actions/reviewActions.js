import axios from "axios";
export const ALL_REVIEWS = "ALL_REVIEWS";
export const GET_USER_REVIEWS = "GET_USER_REVIEWS";
export const GET_PRODUCT_REVIEWS = "GET_PRODUCT_REVIEWS";

axios.defaults.baseURL = "http://localhost:3001";

export const postReview = (productId, review) => {
  return async (dispatch) => {
    try {
      await axios.post(`/product/${productId}/review`, review);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllReviews = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("/reviews");
      return dispatch({
        type: ALL_REVIEWS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getReviewByUser(userId) {
  return async function (dispatch) {
    try {
      let user = await axios.get(`/user/${userId}/reviews`);

      return dispatch({
        type: GET_USER_REVIEWS,
        payload: user.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getReviewByProduct(productId) {
  return async function (dispatch) {
    try {
      let product = await axios.get(`/product/${productId}/reviews`);

      return dispatch({
        type: GET_PRODUCT_REVIEWS,
        payload: product.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteReview = (productId, reviewId) => {
  return async () => {
    try {
      await axios.delete(`/product/${productId}/review/${reviewId}`);
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteReviewByUser = (id) => {
  return async () => {
    try {
      await axios.delete("/review/" + id);
    } catch (error) {
      console.log(error);
    }
  };
};