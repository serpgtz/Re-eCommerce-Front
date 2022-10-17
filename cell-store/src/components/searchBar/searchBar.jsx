import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getProductByName,
  ChangeByName,
} from "../../redux/actions/productActions";
import s from "./searchBar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xl')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
      height: '3.5ch'
    },
  },
}));

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
      {/* <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={(e) => handleChangeInput(e)}
          value={input}
          type="text"
          placeholder="Buscar..."
        />
        <input className={s.btn} type="submit" value="Buscar" />
      </form> */}
      <form onSubmit={handleSubmit}>
       <Search onChange={(e) => handleChangeInput(e)} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </form>
    </div>
  );
}

