import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
// 



// axios.defaults.baseURL = process.env.REACT_APP_API 
=======

>>>>>>> 806b6470804ce3e5445d023525e01910c1cdcf60

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     
        <BrowserRouter>
          <App />
        </BrowserRouter>
     
    </Provider>
  </React.StrictMode>
);