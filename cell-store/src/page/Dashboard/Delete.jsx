import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions/userActions";
import styles from "./Delete.module.css";

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deleteUser(id));
  };
  return (
    <>
      <span onClick={(e) => handleClick(e)} className={styles.onlySpan}>
        {" "}
        X
      </span>
    </>
  );
};

export default Delete;
