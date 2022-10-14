import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import Reviews from "./Reviews";
import { getAllUsers } from "../../redux/actions/userActions";
import { getAllProducts } from "../../redux/actions/productActions";
import s from './ReviewsList.module.css';


function ReviewsList() {
    const dispatch = useDispatch();
    const allusers = useSelector((state) => state.user.users);
    const allProducts = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllProducts());
    }, []);

  return (
    <div className={`list ${s.listRev}`}>
        <Sidebar/>
        <div className={`listContainer ${s.listContainerRev}`}>
            <Reviews users={allusers} products={allProducts} />
        </div>
    </div>
  )
}

export default ReviewsList