import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchReddit, setSearchString } from "./displaySlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.content.searchString);

  const handleInputChange = (e) => {
    dispatch(setSearchString(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchReddit());
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        color: "white",
      }}
    >
      <label htmlFor="searchInput">
        Search:
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          value={searchString}
          onChange={handleInputChange}
        ></input>
      </label>
      <button type="submit" style={{ height: "fit-content" }}>
        Submit
      </button>
    </form>
  );
};

export default Search;
