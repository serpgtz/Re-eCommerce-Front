import axios from "axios";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER = "USER";
export const RESET_USER = "RESET_USER";
export const TOKEN = "TOKEN";
export const ALL_USERS = "ALL_USERS";
export const RESET_ERROR = "RESET_ERROR";
export const GET_BY_NAME = "GET_BY_NAME";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const ERROR_CONFIRM_TOKEN = "ERROR_CONFIRM_TOKEN";
export const RESPONSE_EMAIL = "RESPONSE_EMAIL";
export const RESPONSE_CHANGE_PASSWORD_FORGOT =
  "RESPONSE_CHANGE_PASSWORD_FORGOT";
export const RESPONSE_NEW_PASSWORD = "RESPONSE_NEW_PASSWORD";

axios.defaults.baseURL = "http://localhost:3001";

export const userRegister = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/register", user);
      return dispatch({
        type: REGISTER_ERROR,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data,
      });
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

      localStorage.setItem("user", JSON.stringify(user.data));
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

export const deleteUser = (id) => {
  return async () => {
    try {
      await axios.delete("/users/" + id);
    } catch (error) {
      console.log(error);
    }
  };
};
export const getUser = (id) => {
  return async () => {
    try {
      await axios.get("/users/" + id);
    } catch (error) {
      console.log(error);
    }
  };
};

export const confirmUser = (token) => {
  return async (dispatch) => {
    try {
      await axios.get(`/confirmar/${token}`);
    } catch (error) {
      return dispatch({
        type: ERROR_CONFIRM_TOKEN,
        payload: error.response.data,
      });
    }
  };
};
export const changePassword = (token) => {
  return async (dispatch) => {
    try {
      await axios.post(`/olvide-password/${token}`);
    } catch (error) {
      return dispatch({
        type: ERROR_CONFIRM_TOKEN,
        payload: error.response.data,
      });
    }
  };
};

export const forgotPasswordEmail = (email) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/olvide-password`, email);

      return dispatch({
        type: RESPONSE_EMAIL,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: RESPONSE_EMAIL,
        payload: error.response.data,
      });
    }
  };
};

export const ChangePasswordForgot = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/olvide-password/${token}`);
      console.log(res.data);
      return dispatch({
        type: RESPONSE_CHANGE_PASSWORD_FORGOT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data);
      return dispatch({
        type: RESPONSE_CHANGE_PASSWORD_FORGOT,
        payload: error.response.data,
      });
    }
  };
};

export const newPassword = (password, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/newPassword/${token}`, password);
      return dispatch({
        type: RESPONSE_NEW_PASSWORD,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: RESPONSE_NEW_PASSWORD,
        payload: error.response.data,
      });
    }
  };
};

export const cambiarPassword = (id, password, newPass) => {
  return async (dispatch) => {
    try {
      await axios.post(`/cambiar-password/${id}`, password, newPass);
    } catch (error) {
      return dispatch({
        type: ERROR_CONFIRM_TOKEN,
        payload: error.response.data,
      });
    }
  };
};
