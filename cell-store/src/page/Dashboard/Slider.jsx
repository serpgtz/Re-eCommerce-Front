// import { useState } from "react";
// import UsersContainer from "./UsersContainer";
// import styles from "./Slider.module.css";

// const Slider = ({ users }) => {
//   const usersLength = users.length - 1;
//   const [slideIndex, setSlideIndex] = useState(0);
//   const slideIndex2 = slideIndex + 15;
//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
//     }
//     if (direction === "right" && slideIndex2 <= usersLength) {
//       setSlideIndex(slideIndex <= usersLength ? slideIndex + 1 : 0);
//     }
//   };
//   return (
//     <>
//       <div
//         className={styles.leftArrow}
//         direction="left"
//         onClick={() => handleClick("left")}
//       >
//         ◄
//       </div>

//       {console.log(slideIndex, slideIndex2)};
//       <div
//         className={styles.rightArrow}
//         direction="right"
//         onClick={() => handleClick("right")}
//       >
//         ►
//       </div>
//     </>
//   );
// };

// export default Slider;
