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
    <div id="bottomNav">
      <button id="backButton" onClick={clickBack} disabled={hideBack()}>
        Back
      </button>
      <button id="nextButton" onClick={clickNext} disabled={hideNext()}>
        Next
      </button>
    </div>
  );
};

export default BottomNav;
