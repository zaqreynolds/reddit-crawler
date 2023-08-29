import { useTheme } from "@emotion/react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent, searchReddit, selectFilter } from "./displaySlice";

const Filter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.content.searchString);
  const hideOption = () => {
    if (!state) {
      return "none";
    } else {
      return "block";
    }
  };

  const [filter, setFilter] = useState("");
  const handleFilterChange = (e) => {
    dispatch(selectFilter(e.target.value));

    if (state) {
      dispatch(searchReddit());
    } else {
      dispatch(fetchContent());
    }
  };

  const theme = useTheme();
  const primaryLighterColor = theme.palette.primary.lighter;

  return (
    <>
      {/* // <Box id="filter" sx={{}}> */}
      {/* <div style={{ color: "white" }}>Sort By: </div>
      <select onChange={handleFilterChange} style={{}}>
        <option value="hot">Hot</option>
        <option value="new">New</option>
        <option value="top">Top</option>
        <option value="relevance" style={{ display: hideOption() }}>
          Relevance
        </option>
        <option value="comments" style={{ display: hideOption() }}>
          Comments
        </option>
      </select> */}
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          label="Filter"
          autoWidth
          value={filter}
          size="small"
        >
          <MenuItem value="hot">Hot</MenuItem>
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="top">Top</MenuItem>
          <MenuItem value="relevance" style={{ display: hideOption() }}>
            Relevance{" "}
          </MenuItem>
          <MenuItem value="comments" style={{ display: hideOption() }}>
            Comments
          </MenuItem>
        </Select>
      </FormControl>
      {/* // </Box> */}
    </>
  );
};

export default Filter;
