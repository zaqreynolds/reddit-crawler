import { Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleViewMode } from "./displaySlice";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";

const ViewButton = () => {
  const dispatch = useDispatch();
  const toggleView = () => dispatch(toggleViewMode());

  return (
    <IconButton variant="outlined" onClick={() => toggleView()} color="inherit">
      <SpaceDashboardTwoToneIcon />
    </IconButton>
  );
};

export default ViewButton;
