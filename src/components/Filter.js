import React from "react";
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
  const handleFilterChange = (e) => {
    dispatch(selectFilter(e.target.value));

    if (state) {
      dispatch(searchReddit());
    } else {
      dispatch(fetchContent());
    }
  };

  return (
    <div
      id="Filter"
      style={{
        display: "flex",
        paddingTop: "45px",
        margin: "5px",
        height: "fitContent",
      }}
    >
      <div style={{ color: "white" }}>Sort By: </div>
      <select onChange={handleFilterChange} style={{ height: "25px" }}>
        <option value="hot">Hot</option>
        <option value="new">New</option>
        <option value="top">Top</option>
        <option value="relevance" style={{ display: hideOption() }}>
          Relevance
        </option>
        <option value="comments" style={{ display: hideOption() }}>
          Comments
        </option>
      </select>
    </div>
  );
};

export default Filter;
