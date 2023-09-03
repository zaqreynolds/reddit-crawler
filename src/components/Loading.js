import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";

const Loading = () => {
  console.log("hello");
  return (
    <Box
      sx={{
        height: "100vh",
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
