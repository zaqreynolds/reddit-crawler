import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";

const Loading = () => {
  console.log("hello");
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
