import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextList, prevList } from "./displaySlice";

export const BottomNav = () => {
  const dispatch = useDispatch();

  const beforeState = useSelector(({ content }) => {
    console.log("BEFORE BEFORE", content.data?.data);
    return content.data?.data?.before;
  });
  const afterState = useSelector(({ content }) => content.data?.data?.after);

  const clickBack = () => {
    dispatch(prevList(beforeState));
  };

  const clickNext = () => {
    dispatch(nextList(afterState));
  };
  console.log("BEFORE WHAT", beforeState);
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
