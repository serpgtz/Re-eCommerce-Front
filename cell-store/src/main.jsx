import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import ProductForm from "./page/Form/ProductForm";
import Detail from "./components/cards-products/Detail";
import InterForm from "./page/Form/InterForm";
import CategoryForm from "./page/Form/CategoryForm";
import Auth from "./page/login/Auth";
import Register from "./page/register/register";
import About from "./page/About/About";
import Historia from "./page/historia/Historia";
import Profile from "./page/Profile/Profile";
import {ChakraProvider} from '@chakra-ui/react'
import theme from './theme'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     <ChakraProvider theme={theme} resetCSS={false}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/newproduct" element={<ProductForm />} />
          <Route path="/interForm/:id" element={<InterForm />} />
          <Route path="/categoryForm/:id" element={<CategoryForm />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/account/login" element={<Auth />} />
          <Route path="/account/register" element={<Register />} />
          
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/historia" element={<Historia/>} />
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
    </Provider>
    
  </React.StrictMode>
);
