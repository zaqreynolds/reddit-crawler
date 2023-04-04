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
      }}
    >
      <button
        style={{
          marginRight: "35rem",
        }}
        disabled={!beforeState}
        onClick={clickBack}
      >
        Back
      </button>
      <button style={{ marginLeft: "5rem" }} onClick={clickNext}>
        Next
      </button>
    </div>
  );
};
