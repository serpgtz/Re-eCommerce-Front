import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getProductByName,
  ChangeByName,
} from "../../redux/actions/productActions";
import s from "./searchBar.module.css";

export default function SearchBar() {
  const [input, setInputChange] = useState("");

  const dispatch = useDispatch();

  function handleChangeInput(e) {
    e.preventDefault();
    setInputChange(e.target.value);
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(ChangeByName());
    dispatch(getProductByName(input));
    setInputChange("");
  }

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
      <input
        className={s.input}
        onChange={(e) => handleChangeInput(e)}
        value={input}
        type="text"
        placeholder="Buscar..."
      />
     
      </form>
    </div>
  );
}
