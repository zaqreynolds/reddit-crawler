import React from "react";
import { useDispatch } from "react-redux";
import { selectFilter } from "./displaySlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(selectFilter(e.target.value));
  };

  return (
    <div style={{ display: "inline-flex", paddingTop: "45px", margin: "5px" }}>
      <div style={{ color: "white" }}>Select a Sauce</div>
      <select onChange={handleFilterChange}>
        <option value="Hot">Hot</option>
        <option value="New">New</option>
        <option value="Top">Top</option>
        <option value="Relevance">Relevance</option>
        <option value="Comments">Comments</option>
      </select>
    </div>
  );
};
