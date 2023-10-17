import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../utils/useDebounce";
import { searchReddit, setSearchString } from "./displaySlice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const searchString = useSelector((state) => state.content.searchString);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    dispatch(setSearchString(debouncedSearchQuery));
    dispatch(searchReddit(searchString));
  }, [debouncedSearchQuery]);

  return (
    <Box>
      <TextField
        label="Search"
        variant="filled"
        size="small"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
    </Box>
  );
};

export default Search;
