import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewByUser, getAllReviews } from "../../redux/actions/reviewActions";
import { getUserData } from "../../redux/actions/userActions";
import s from "./ReviewsByUser.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ReviewsByUser = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const reviewByUser = useSelector((state) => state.review.reviews);
    const products = useSelector((state) =>
        state.product.products
    );
    const idProductsReviewByUser = useSelector((state) =>
        state.review.reviews.map(r => { return r.product })
    );
    const [productsByReviewByUser, setProductsByReviewByUser] = useState()

    useEffect(() => {
        dispatch(getUserData());
        (user._id) ? dispatch(getReviewByUser(user._id)) : console.log('no hay ID');
    }, [dispatch, user._id]);

    useEffect(() => {
        completeProducts();
    }, [reviewByUser]);

    const completeProducts = () => {
        console.log('estoy en completeProducts--------------------');
        (idProductsReviewByUser) ?
            setProductsByReviewByUser(idProductsReviewByUser.map(r => products.filter(p => p._id === r)))
            : console.log('no hay productos')
    }

    console.log('reviewByUser', reviewByUser);
    console.log(user);
    console.log('products', products);
    console.log('productsByReviewByUser', productsByReviewByUser)
    console.log('idProductsReviewByUser', idProductsReviewByUser);

    return (
        <div className={s.userReviewsContainer}>
            <h3>Reviews</h3>
            <div className={s.TableReview}>
                <table >
                    <thead>
                        <tr className={s.tableTh}>
                            <th scope='col' className={s.colImage}></th>
                            <th scope='col' className={s.colProducto}>Producto</th>
                            <th scope='col' className={s.colReview}>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th>
                            {productsByReviewByUser ?
                                productsByReviewByUser.map((p) => (
                                    <div>
                                        <img className={s.imageProduct} src={p[0]?.image} alt="" />
                                    </div>
                                ))
                                :
                                <div></div>
                            }
                        </th>
                        <th>
                            {productsByReviewByUser ?
                                productsByReviewByUser.map((p) => (
                                    <div>
                                        <Link to={`/detail/${p[0]?._id}`}>
                                            <p>{p[0]?.name}</p>
                                        </Link>
                                    </div>
                                ))
                                :
                                <div></div>
                            }
                        </th>
                        <th>
                            {reviewByUser.length ?
                                reviewByUser.map((r) => (
                                    <p>{r?.comment}</p>
                                ))

                                :
                                (user.admin === true) ? "El administrador no puede realizar reviews"
                                    :
                                    "Todavía no has hecho ninguna review"}
                        </th>

                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default ReviewsByUser;