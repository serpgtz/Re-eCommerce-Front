import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReviews,
  getReviewByProduct,
  postReview,
} from "../../redux/actions/reviewActions";
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
  console.log(box);
  useEffect(() => {
    dispatch(getReviewByProduct(id));
  }, [dispatch]);
  return (
    <>
      {reviewsByProduct ? (
        <details id="detalles" title="Reviews">
          {reviewsByProduct?.map((r) => (
            <summary id="reviewsDe">
              <p id={"usuarioEnReview" + r?.user?.id}>{r?.user?.username}</p>
              <p id={"commentEnReview" + r?.user?.id}>{r?.comment}</p>
            </summary>
          ))}
        </details>
      ) : null}
      {user.admin === false && (
        <button onClick={(e) => handlePost(e)}>Reviews</button>
      )}
      {box === true && (
        <>
        <ReviewsRemix
        id={id}
        image={image}
        name={name} />
          {/* <input placeholder="Opino que..." type="text" />
          <label htmlFor="rating">Rating</label>
          <input id="rating" type="range" min="1" max="5" step="1" />
          <input type="button" value="Enviar" /> */}
        </>
      )}
      {/* {"Debería abrirse un box para escribir la review"} */}
    </>
  );
};

export default Reviews;
