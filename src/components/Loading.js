import { Box, Card, CardContent, Skeleton } from "@mui/material";
import React from "react";
import FatDivider from "./FatDivider";

const Loading = ({ viewMode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TempCard viewMode={viewMode} />
    </Box>
  );
};

export default Loading;

const TempCard = ({ viewMode }) => {
  const viewModeToggle = viewMode === "linear" ? "60vw" : "100%";
  return (
    <Card
      elevation={20}
      sx={{
        width: viewModeToggle,
      }}
    >
      <CardContent
        sx={{
          "&:last-child": {
            pb: 1,
          },
        }}
      >
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            fontSize: "1rem",
          }}
        />
        <FatDivider />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            fontSize: "1rem",
          }}
        />
        <Skeleton variant="rounded" animation="wave" height={50} />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            fontSize: "1rem",
          }}
        />
        <Skeleton variant="rounded" animation="wave" height={100} />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            fontSize: "1rem",
            marginBottom: "1rem",
          }}
        />
      </CardContent>
    </Card>
  );
};
