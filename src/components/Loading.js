import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import React from "react";
import PostCard from "./PostCard";
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
      {/* <CircularProgress /> */}
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
        {/* <Skeleton
          variant="rounded"
          // height={100}
          sx={{ paddingTop: "3px", width: "100%", height: "10rem" }}
        /> */}
        {/* <Typography className="cardAuthoer" variant="caption">
          <em>posted by:</em> {post.data.author}
        </Typography>

        <Box className="cardMedia" ref={ref}>
          {mediaType(post)}
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: primaryMediumColor, m: 1 }}
        >
          <NavLink
            to={`/${post.data.id}`}
            activeclassname="active"
            elevation={6}
            style={{ textDecoration: "none" }}
          >
            <Typography
              className="cardComments"
              sx={{ color: "white" }}
              elevation={10}
            >
              Comments: {post.data.num_comments}
            </Typography>
          </NavLink>
        </Button>  */}
      </CardContent>
    </Card>
  );
};
