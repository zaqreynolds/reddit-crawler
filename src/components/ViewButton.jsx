import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleViewMode } from "./displaySlice";

const ViewButton = () => {
  const dispatch = useDispatch();
  const toggleView = () => dispatch(toggleViewMode());
  return (
    <Button variant="contained" onClick={() => toggleView()}>
      Toggle View
    </Button>
  );
};

export default ViewButton;
