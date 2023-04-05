import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextList, prevList } from "./displaySlice";
import { incrementPageCount, decrementPageCount } from "./displaySlice";

export const BottomNav = () => {
  const dispatch = useDispatch();

  const beforeState = useSelector(({ content }) => {
    return content.data?.data?.before;
  });
  const afterState = useSelector(({ content }) => content.data?.data?.after);

  const hideBack = () => {
    if (beforeState) {
      return "block";
    } else {
      return "none";
    }
  };

  const clickBack = () => {
    dispatch(prevList(beforeState));
    dispatch(decrementPageCount());
  };

  const clickNext = () => {
    dispatch(nextList(afterState));
    dispatch(incrementPageCount());
  };

  return (
    <div
      id="nextBack"
      style={{
        position: "fixed",
        zIndex: "5",
        width: "100%",
        height: "30px",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#182a35",
        paddingTop: "5px",
      }}
    >
      <button
        style={{
          marginRight: "5rem",
          display: hideBack(),
        }}
        // disabled={!beforeState}
        onClick={clickBack}
      >
        Back
      </button>
      <button onClick={clickNext}>Next</button>
    </div>
  );
};
