import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextList, prevList } from "./displaySlice";
import { incrementPageCount, decrementPageCount } from "./displaySlice";

const BottomNav = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

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
    <Box
      id="bottomNav"
      sx={{
        position: "fixed",
        zIndex: "5",
        width: "100%",
        height: "30px",
        bottom: "0",
        display: "flex",
        backgroundColor: theme.palette.primary.lighter,
        paddingTop: "5px",
        justifyContent: "center",
        gap: "10px",
        opacity: "0.95",
      }}
      // elevation={16}
    >
      <Button
        id="backButton"
        variant="contained"
        color="inherit"
        size="small"
        onClick={clickBack}
        disabled={hideBack()}
      >
        Back
      </Button>
      <Button
        id="nextButton"
        variant="contained"
        color="inherit"
        size="small"
        onClick={clickNext}
        disabled={hideNext()}
      >
        Next
      </Button>
    </Box>
  );
};

export default BottomNav;
