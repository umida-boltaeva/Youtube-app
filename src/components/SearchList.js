import React from "react";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchList = () => {
  return (
    <>
      <TextField id="standard-basic" label="Search" />
      <SearchIcon />
    </>
  );
};

export default SearchList;
