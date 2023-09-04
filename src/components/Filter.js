import { useTheme } from "@emotion/react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
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
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (state) {
      dispatch(searchReddit());
    } else {
      dispatch(fetchContent());
    }
  }, [filter]);

  const theme = useTheme();

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel
          id="filter-label"
          sx={{ color: theme.palette.primary.lighter }}
        >
          Filter by...
        </InputLabel>
        <Select
          labelId="filter-label"
          label="Filter by..."
          id="filter"
          autoWidth
          value={filter}
          size="small"
          onChange={handleFilterChange}
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
    </>
  );
};

export default Filter;
