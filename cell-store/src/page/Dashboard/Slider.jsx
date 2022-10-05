import { StylesProvider } from "@chakra-ui/react";
import { useState } from "react";
import UsersContainer from "./UsersContainer";
import styles from "./Slider.module.css";

const Slider = ({ users }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    }
    if (direction === "right") {
      setSlideIndex(
        slideIndex <= users.length - 1 ? slideIndex + 1 : users.length - 1
      );
    }
  };
  return (
    <>
      <div
        className={styles.leftArrow}
        direction="left"
        onClick={() => handleClick("left")}
      >
        FLECHA
      </div>
      <UsersContainer
        users={users}
        slideIndex={slideIndex}
        slideIndex2={slideIndex + 3}
      />
      ;
      <div
        className={styles.rightArrow}
        direction="right"
        onClick={() => handleClick("right")}
      >
        OTRA FLECHA
      </div>
    </>
  );
};

export default Slider;
