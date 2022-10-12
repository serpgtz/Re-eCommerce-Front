import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReviews,
  getReviewByProduct,
  postReview,
} from "../../redux/actions/reviewActions";
import styles from "./Reviews.module.css";
import ReviewsRemix from "./ReviewsRemix";

const Reviews = ({ id, name, image }) => {
  const dispatch = useDispatch();
  //   const reviews = useSelector((state) => state.reviews);
  const reviewsByProduct = useSelector((state) => state.reviews);
  const user = JSON.parse(localStorage.getItem("user"));
  const [box, setBox] = useState(false);
  const handlePost = (e) => {
    e.preventDefault();
    setBox(!box);
  };

  useEffect(() => {
    dispatch(getReviewByProduct(id));
  }, [dispatch]);
  return (
    <>
      {reviewsByProduct ? (
        <details id="detalles" title="Reviews" style={styles.botónReview}>
          {reviewsByProduct?.map((r) => (
            <summary id="reviewsDe">
              <p id={"usuarioEnReview" + r?.user?.id}>{r?.user?.username}</p>
              <p id={"commentEnReview" + r?.user?.id}>{r?.comment}</p>
            </summary>
          ))}
        </details>
      ) : null}
      {user?.admin === false && (
        <button onClick={(e) => handlePost(e)}>Reviews</button>
      )}
      {box === true && (
        <ReviewsRemix setBox={setBox} user={user} id={id} image={image} name={name} />
      )}
    </>
  );
};

export default Reviews;
