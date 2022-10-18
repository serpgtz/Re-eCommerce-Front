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
    const [productsByReviewByUser, setProductsByReviewByUser] = useState(
        []
    )

    useEffect(() => {
        dispatch(getUserData());
        (user._id) ? dispatch(getReviewByUser(user._id)) : console.log('no hay ID');
    }, [dispatch, user._id]);

    useEffect(() => {
        completeProducts();
    }, [reviewByUser]);

    const completeProducts = () => {
        // console.log('estoy en completeProducts--------------------');
        let supProductsReviewByUser = [];
        if (idProductsReviewByUser) {
            supProductsReviewByUser = idProductsReviewByUser.map(r => products.filter(p => p._id === r));
            supProductsReviewByUser = supProductsReviewByUser.map(s => s[0])

        }
        if (productsByReviewByUser) {
            console.log(' supProductsReviewByUser', supProductsReviewByUser)
            for (let i = 0; i < reviewByUser.length; i++) {
                for (let j = 0; j < supProductsReviewByUser.length; j++) {
                    if (reviewByUser[i].product === supProductsReviewByUser[j]._id) {
                        supProductsReviewByUser[i].reviews = reviewByUser[j].comment
                    }
                }
            }
            setProductsByReviewByUser(supProductsReviewByUser)
        }
    }

    // console.log('reviewByUser', reviewByUser);
    // console.log(user);
    // console.log('products', products);
    // console.log('productsByReviewByUser', productsByReviewByUser)


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
                        {productsByReviewByUser ?
                            (productsByReviewByUser.map((p) => (
                                <tr key={p._id}>

                                    <th>

                                        <div>
                                            <img className={s.imageProduct} src={p?.image} alt="" />
                                        </div>
                                    </th>
                                    <th>

                                        <div>
                                            <Link to={`/detail/${p?._id}`}>
                                                <p>{p?.name}</p>
                                            </Link>
                                        </div>


                                    </th>
                                    <th>
                                        <p>{p?.reviews}</p>
                                    </th>
                                </tr>
                            )))
                            :
                            console.log('Todavía no has hecho ninguna review')
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default ReviewsByUser;