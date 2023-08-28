import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleViewMode } from "./displaySlice";

const ViewButton = () => {
  const dispatch = useDispatch();
  const toggleView = () => dispatch(toggleViewMode());

  const theme = useTheme();
  const primaryMediumColor = theme.palette.primary.medium;
  return (
    <Button
      variant="contained"
      onClick={() => toggleView()}
      sx={{ backgroundColor: primaryMediumColor, m: 1 }}
    >
      Toggle View
    </Button>
  );
};

export default ViewButton;
