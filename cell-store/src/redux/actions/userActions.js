import axios from "axios";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER = "USER";
export const RESET_USER = "RESET_USER";
export const TOKEN = "TOKEN";

axios.defaults.baseURL = "http://localhost:3001";

export const userRegister = (user) => {
  console.log(user);
  return async () => {
    try {
      await axios.post("/register", user);
    } catch (error) {
      console.log(error);
    }
  };
};

export const userLogin = (user) => {
  return async (dispatch) => {
    try {
      const token = await axios.post("/login", user);

      localStorage.setItem("token", token.data.token);

      return dispatch({
        type : TOKEN,
        payload : token.data
      })
    } catch (error) {
      return dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getUserData = () => {
  return async (dispatch) => {
    try {
      const user = await axios.get("/perfil", {
        headers: {
          Bearer: localStorage.getItem("token"),
        },
      });

      return dispatch({
        type: USER,
        payload: user.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const userLogOut = () => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: RESET_USER,
      });
    } catch (error) {
      return dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data,
      });
    }
  };
};
