import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../components/displaySlice";
import PostCard from "../components/PostCard";
import Comments from "../components/Comments";
import Loading from "../components/Loading";
import { Box, Typography, useTheme } from "@mui/material";

export const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.content.details);
  const status = useSelector((state) => state.content.detailStatus);
  const error = useSelector((state) => state.content.error);
  const theme = useTheme();

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);
  if (status === "loading") {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <PostCard post={details[0].data.children[0]} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "95%",
          marginTop: "1rem",
        }}
      >
        <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
          Comments:
        </Typography>
        <Comments comments={details[1].data.children} isFirst />
      </Box>
    </Box>
  );
};
