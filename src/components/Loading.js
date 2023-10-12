import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
