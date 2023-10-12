import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { toggleViewMode } from "./displaySlice";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";
import HorizontalSplitTwoToneIcon from "@mui/icons-material/HorizontalSplitTwoTone";
import { useEffect, useState } from "react";

const ViewButton = () => {
  const dispatch = useDispatch();
  const toggleView = () => dispatch(toggleViewMode());
  const view = useSelector((state) => state.content.viewMode);
  const [toolTipTitle, setTooltipTitle] = useState();

  useEffect(() => {
    if (view === "linear") {
      setTooltipTitle("switch to masonry");
    } else if (view === "masonry") {
      setTooltipTitle("switch to linear");
    }
  }, [view, toolTipTitle]);

  return (
    <Tooltip title={toolTipTitle} placement="bottom" arrow>
      <IconButton
        variant="outlined"
        onClick={() => toggleView()}
        color="inherit"
      >
        {view === "linear" ? (
          <SpaceDashboardTwoToneIcon />
        ) : (
          <HorizontalSplitTwoToneIcon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ViewButton;
