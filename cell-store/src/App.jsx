import { useDispatch, useSelector } from "react-redux";
import { json, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import {
  getAllProducts,
  getProductsPerPage,
} from "./redux/actions/productActions";
import Detail from "./components/cards-products/Detail";
import Favoritos from "./components/cards-products/Favoritos";
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
import Dashboard from "./page/Dashboard/Dashboard";
import ConfirmEmail from "./page/ConfirmEmail/ConfirmEmail";
import ConfirmedEmail from "./page/ConfirmEmail/ConfirmedEmail";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { ProtectedRoute } from "./Protected/ProtectedRoute";
import ChangePassword_forgot from "./page/changePassowrd_forgot/ChangePassword_forgot";
import UsersList from "./page/Dashboard/UsersList";
import Sidebar from "./page/Dashboard/Sidebar";
import AdminDashboard from "./page/Dashboard/AdminDashboar";
import VentasTotales from "./page/Dashboard/VentasTotales";
import ProductList from "./page/Dashboard/ProductList";
import OrdersList from "./page/Dashboard/OrdersList";
import ReviewsList from "./page/Dashboard/ReviewsList";
import Settings from "./page/Profile/Settings";
import Faq from "./components/Faqs/Faq";

/* import Detail from './components/cards-products/Detail' */

function App() {
  const user_redux = useSelector((state) => state.user.user);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("USER:", user);
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
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/account/login" element={<Auth />} />
        <Route path="/confirm" element={<ConfirmEmail />} />
        <Route path="/faqs" element={<Faq />} />
        {/* */}
        <Route path="/confirm/:id" element={<ConfirmedEmail />} />
        {/* */}
        <Route path="/changePassword/:id" element={<ChangePassword_forgot />} />
        <Route path="/historia" element={<Historia />} />

        <Route
          path="/account/profile"
          element={
            <ProtectedRoute isAllowed={user} redirectTo={"/account/login"}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/profile/:userId/usersettings"
          element={
            <ProtectedRoute isAllowed={user} redirectTo={"/account/login"}>
              <Settings />
            </ProtectedRoute>
          }
        />
        {/*autenticado */}

        <Route element={<ProtectedRoute isAllowed={user?.admin} />}>
          <Route path="/newproduct" element={<ProductForm />} />
          {/*autenticado y administrador*/}
          <Route path="/interForm/:id" element={<InterForm />} />
          {/*autenticado y administrador*/}
          <Route path="/categoryForm/:id" element={<CategoryForm />} />
          {/*autenticado y administrador*/}
          <Route path="/adminDashboard" element={<Dashboard />} />
          {/*autenticado y administrador*/}
          <Route path="/adminDashboard/sidebar" element={<Sidebar />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/userslist" element={<UsersList />} />
          {/*autenticado y administrador*/}
          <Route path="/admin" element={<AdminDashboard />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/ventastotales" element={<VentasTotales />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/productlist" element={<ProductList />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/ordersList" element={<OrdersList />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/reviewslist" element={<ReviewsList />} />
          {/*autenticado y administrador*/}
        </Route>

        <Route path="/account/register" element={<Register />} />
        {/*sin logear*/}
      </Routes>
      <Footer />
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
