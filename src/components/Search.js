import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../utils/useDebounce";
import {
  fetchContent,
  searchReddit,
  setSearchString,
} from "./slices/contentSlice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Search = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const searchString = useSelector((state) => state.content.searchString);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearchString = () => {
    setSearchQuery("");
    dispatch(setSearchString(""));
    dispatch(fetchContent());
  };

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery) {
      dispatch(setSearchString(debouncedSearchQuery));
      dispatch(searchReddit(searchString));
    }
  }, [debouncedSearchQuery]);

  return (
    <Box>
      <TextField
        label="Search"
        size="small"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ alignItems: "center" }}>
              <IconButton
                aria-label="clear search input"
                onClick={clearSearchString}
                edge="end"
                sx={{
                  display: searchString ? "flex" : "none",

                  color: theme.palette.primary.medium,
                  "&:hover .MuiSvgIcon-root": {
                    color: theme.palette.primary.lighter,
                  },
                }}>
                <HighlightOffIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          "& label.Mui-focused": {
            color: theme.palette.primary.lighter,
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.lighter,
            },
          },
        }}
      />
    </Box>
  );
};

export default Search;
