import s from "./ReviewsRemix.module.css";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


export default function ReviewsRemix({name, image}) {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);


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
          <textarea placeholder={handlePlaceHolder()}></textarea>
          <button className={` ${!number && "disabled"} `}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
