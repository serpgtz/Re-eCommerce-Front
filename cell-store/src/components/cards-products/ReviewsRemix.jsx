import s from "./ReviewsRemix.module.css";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { postReview } from "../../redux/actions/reviewActions";
import Alert from "../alert/Alert";

export default function ReviewsRemix({ id, name, image, user }) {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    product: id,
    rating: "",
    comment: "",
    user: user,
  });

  const handleSubmit = (input) => {
    if (input?.comment?.length < 4 && user) {
      dispatch(postReview(input));
    } else {
      Alert("Comentarios de mínimo cuatro caracteres");
    }
  };
  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluar";
      case 1:
        setInput({ ...input, rating: 1 });
        return "Insatisfecho";
      case 2:
        setInput({ ...input, rating: 2 });
        return "Insatisfecho";
      case 3:
        setInput({ ...input, rating: 3 });
        return "Normal";
      case 4:
        setInput({ ...input, rating: 4 });
        return "Satisfecho";
      case 5:
        setInput({ ...input, rating: 5 });
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
    <div className={s.AppReviews}>
      <div className={s.popupReviews}>
        <div className={s.contentReviews}>
          <div className={s.productReviews}>
            <img
              style={{ width: 60, height: 60, objectFit: "cover" }}
              src={image}
              alt={name}
            />
            <h1>{name}</h1>
          </div>
          <div>
            <h1>{handleText()}</h1>
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
            placeholder={handlePlaceHolder()}
            onInput={setInput({ comment: Element.innerText })}
          ></textarea>
          <button
            className={` ${!number && "disabled"} `}
            onSubmit={handleSubmit()}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
