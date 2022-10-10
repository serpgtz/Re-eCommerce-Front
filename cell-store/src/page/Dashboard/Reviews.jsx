import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../redux/actions/reviewActions";
import styles from "./Reviews.module.css";
const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.review.reviews);
  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);
  return (
    <div style={styles.reviewContainer}>
      {reviews
        ? reviews.map((review) =>
            review.exists === true ? (
              <div style={styles.review}>
                <p>ID:{review._id}</p>
                <p>{review.comment}</p>
              </div>
            ) : null
          )
        : "Cargando..."}
    </div>
  );
};

export default Reviews;
