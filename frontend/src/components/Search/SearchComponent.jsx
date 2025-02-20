import { IconButton, InputLabel, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchContext from "../../Contexts/SearchContexts/SearchContext";

const SearchComponent = () => {
  const { search, setSearch } = useContext(SearchContext);

  const changeHandler = (e) => {
    setSearch({ type: "search", searchValue: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target["search"].value);
    setSearch({ type: "search", searchValue: e.target["search"].value });
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        name="search"
        size="small"
        onChange={changeHandler}
        label="Search"
        id="fullWidth"
        sx={{ mr: 5, borderRadius: "12px", width: "100%", maxWidth: "500px" }}
        InputProps={{
          startAdornment: (
            <IconButton type="submit" fontSize="small" sx={{ mr: 1 }}>
              <SearchIcon />
            </IconButton>
          ),
        }}
        placeholder="Search"
      />
    </form>
  );
};

export default SearchComponent;
