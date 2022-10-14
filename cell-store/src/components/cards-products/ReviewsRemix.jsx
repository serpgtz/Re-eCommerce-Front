import s from "./ReviewsRemix.module.css";
import { useState } from "react";
import { AiFillStar, AiOutlineStar, /* BsStarHalf */ } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { postReview } from "../../redux/actions/reviewActions";

export default function ReviewsRemix({ id, name, image, user, setBox }) {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  //console.log(id);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    product: id,
    rating: number,
    comment: "",
    userId: user._id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input?.comment?.length >= 4 && user) {
      dispatch(postReview(id, input));
      setBox(false)
      setInput({
        product: id,
        rating: "",
        comment: "",
        userId: user._id,
      });
      alert('Review completada!')
    } else {
      alert("Comentarios de mínimo 4 caracteres");
    }
  };
   const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluar";
      case 1:
        return "Insatisfecho";
      case 2:
        return "Insatisfecho";
      case 3:
        return "Normal";
      case 4:
        return "Satisfecho";
      case 5:
        return "Muy Satisfecho";
      default:
        return "Evaluar";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comente aquí...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "Cual fue su problema?";
      case 5:
        return "Por qué te gustó este producto?";
      default:
        return "Comente aquí...";
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.AppReviews}>
      
      <div className={s.popupReviews}>
        <div className={s.contentReviews}>
          <div className={s.btnX} onClick={() => setBox(false)} >x</div>
          <div className={s.productReviews}>
            <img
              style={{ width: 60, height: 60, objectFit: "cover" }}
              src={image}
              alt={name}
            />
            <h1 className={s.h1X}>{name}</h1>
          </div>
          <div>
            <h1 className={s.h1Num}>{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <textarea
            name="comment"
            value={input.comment}
            onChange={(e) => setInput({ ...input, comment: e.target.value })}
            placeholder={handlePlaceHolder()}
          ></textarea>

          <button 
            type="submit"
            className={` ${!number && s.disabled} `}
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}


//-----------------------------lo de abajo funciona----------------------------------
/* import s from "./ReviewsRemix.module.css"; */
/* import { useState } from "react";
import { useDispatch } from "react-redux";
import { postReview } from "../../redux/actions/reviewActions";

export default function ReviewsRemix({ id, name, image, user, setBox }) {
  console.log(id);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    product: id,
    rating: "",
    comment: "",
    userId: user._id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input?.comment?.length && user) {
      dispatch(postReview(id, input));
      setBox(false)
      setInput({
        product: id,
        rating: "",
        comment: "",
        userId: user._id,
      });
      alert('Review completada!')
    } else {
      alert("Comentarios de mínimo 1 caracter");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul className="form-container">
        <li>
          <label htmlFor="rating">Rating</label>
          <select
            name="rating"
            id="rating"
            value={input.rating}
            onChange={(e) => setInput({ ...input, rating: e.target.value })}
          >
            <option value="1">1- Poor</option>
            <option value="2">2- Fair</option>
            <option value="3">3- Good</option>
            <option value="4">4- Very Good</option>
            <option value="5">5- Excelent</option>
          </select>
        </li>
        <li>
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            value={input.comment}
            onChange={(e) => setInput({ ...input, comment: e.target.value })}
          ></textarea>
        </li>

        <li>
          <button type="submit" className="button primary">
            Submit
          </button>
        </li>
      </ul>
    </form>
  );
}
 */