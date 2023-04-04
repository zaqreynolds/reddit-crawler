import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchReddit } from "./displaySlice";

export const Search = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");

  const handleInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchReddit(searchData));
    setSearchData("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "48px",
        display: "inline-flex",
        color: "white",
        height: "fit-content",
      }}
    >
      <label htmlFor="searchInput">
        Search:
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          value={searchData}
          onChange={handleInputChange}
        ></input>
      </label>
      <button type="submit" style={{ height: "fit-content" }}>
        Submit
      </button>
    </form>
  );
};
