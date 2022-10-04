import axios from "axios";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER = "USER";
export const RESET_USER = "RESET_USER";
export const TOKEN = "TOKEN";
export const ALL_USERS = "ALL_USERS";
export const RESET_ERROR = "RESET_ERROR";
export const GET_BY_NAME = "GET_BY_NAME";

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
        type: TOKEN,
        payload: token.data,
      });
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
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get("/users");
      return dispatch({
        type: ALL_USERS,
        payload: users.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const modifyUser = (id, update) => {
  return async () => {
    try {
      await axios.put("/users/" + id, update);
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};
export function getUserByName(name) {
  return async function (dispatch) {
    console.log("dispatch", name);
    try {
      let user = await axios.get(`/users?username=${name}`);
      return dispatch({
        type: GET_BY_NAME,
        payload: user.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
