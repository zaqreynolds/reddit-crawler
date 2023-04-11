import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextList, prevList } from "./displaySlice";
import { incrementPageCount, decrementPageCount } from "./displaySlice";

const BottomNav = () => {
  const dispatch = useDispatch();

  const beforeState = useSelector(({ content }) => {
    return content.data?.data?.before;
  });
  const afterState = useSelector(({ content }) => content.data?.data?.after);
  const status = useSelector((state) => state.content.status);
  const hideBack = () => {
    if (beforeState && status === "succeeded") {
      return false;
    } else {
      return true;
    }
  };
  const hideNext = () => {
    if (status === "succeeded") {
      return false;
    } else {
      return true;
    }
  };

  const clickBack = () => {
    dispatch(decrementPageCount());
    dispatch(prevList(beforeState));
  };

  const clickNext = () => {
    dispatch(incrementPageCount());
    dispatch(nextList(afterState));
  };

  return (
    <div
      id="bottomNav"
      style={{
        position: "fixed",
        zIndex: "5",
        width: "50%",
        height: "30px",
        bottom: "0",
        display: "flex",
        // backgroundColor: "#182a35",
        backgroundColor: "tomato",
        paddingTop: "5px",
        justifyContent: "center",
        margin: "auto",
        gap: "10px",
      }}
    >
      <button
        id="backButton"
        style={
          {
            // marginRight: "5rem",
          }
        }
        onClick={clickBack}
        disabled={hideBack()}
      >
        Back
      </button>
      <button id="nextButton" onClick={clickNext} disabled={hideNext()}>
        Next
      </button>
    </div>
  );
};

export default BottomNav;
