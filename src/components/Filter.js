import { useTheme } from "@emotion/react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContent,
  searchReddit,
  selectFilter,
} from "./slices/contentSlice";

const Filter = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.content.searchString);
  const data = useSelector((state) => state.content.data);
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
    dispatch(selectFilter(e.target.value));
  };

  useEffect(() => {
    if (state) {
      dispatch(searchReddit());
    } else {
      dispatch(fetchContent());
    }
  }, [filter]);

  useEffect(() => {
    if (!state) {
      setFilter("");
      dispatch(selectFilter("hot"));
    }
  }, [state]);

  return (
    <>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          "& label.Mui-focused": {
            color: theme.palette.primary.lighter,
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.lighter,
            },
          },
        }}
        size="small">
        <InputLabel id="filter-label">Sort by...</InputLabel>
        <Select
          labelId="filter-label"
          label="Sort by..."
          id="filter"
          autoWidth
          value={filter}
          size="small"
          onChange={handleFilterChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.lighter,
              },
            },
          }}>
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
