import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import ProductForm from "./page/Form/ProductForm";
import Detail from "./components/cards-products/Detail";


import InterForm from './page/Form/InterForm';
import CategoryForm from './page/Form/CategoryForm'



import Auth from "./page/login/Auth"
import Register from "./page/register/register"

ReactDOM.createRoot(document.getElementById("root")).render(



  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/newproduct" element={<ProductForm />} />
          <Route path="/interForm/:id" element={<InterForm/>} />
          <Route path="/categoryForm/:id" element={<CategoryForm/>}/>
          <Route path="/account/login" element={<Auth />} />
          <Route path="/account/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
