import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../components/displaySlice";
import PostCard from "../components/PostCard";
import Comments from "../components/Comments";
import Loading from "../components/Loading";
import { Box, Typography, useTheme } from "@mui/material";

export const Details = ({ post, handleClose }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.content.details);
  const status = useSelector((state) => state.content.detailStatus);
  const error = useSelector((state) => state.content.error);
  const theme = useTheme();

  // let { id } = useParams();
  let id = post.data.id;

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
  console.log("seed", details);
  // console.log("post", post);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: theme.palette.primary.medLight,
        paddingTop: "1rem",
      }}
    >
      <PostCard post={details[0].data.children[0]} details={true} />

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
