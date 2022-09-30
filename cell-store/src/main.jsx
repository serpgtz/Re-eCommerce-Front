import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import ProductForm from "./page/Form/ProductForm";
import Detail from "./components/cards-products/Detail";
import Auth from "./page/login/Auth"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/newproduct" element={<ProductForm />} />
          <Route path="/account/login" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
