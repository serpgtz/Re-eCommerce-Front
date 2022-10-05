
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import {
  getAllProducts,
  getProductsPerPage,
} from "./redux/actions/productActions";
import Detail from "./components/cards-products/Detail";
import ProductForm from "./page/Form/ProductForm";
import InterForm from "./page/Form/InterForm";
import CategoryForm from "./page/Form/CategoryForm";
import About from "./page/About/About";
import Auth from "./page/login/Auth";
import Register from "./page/register/Register";
import Profile from "./page/Profile/Profile";
import Historia from "./page/historia/Historia";
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import Dashboard from "./page/Dashboard/Dashboard.jsx";
import Cart from "./components/Cart/Cart";
/* import Detail from './components/cards-products/Detail' */
function App() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.product.page);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProductsPerPage(page));
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/newproduct" element={<ProductForm />} />
        <Route path="/interForm/:id" element={<InterForm />} />
        <Route path="/categoryForm/:id" element={<CategoryForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/account/login" element={<Auth />} />
        <Route path="/adminDashboard" element={<Dashboard />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

/* 

    <Router>
      <Routes>
        <Route path='/:id' element={<Detail/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    
    < Home />
    
    
*/
