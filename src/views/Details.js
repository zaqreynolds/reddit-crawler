import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../components/displaySlice";
import PostCard from "../components/PostCard";
import Comments from "../components/Comments";
import Loading from "../components/Loading";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const Details = ({ post, handleClose }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.content.details);
  const status = useSelector((state) => state.content.detailStatus);
  const error = useSelector((state) => state.content.error);
  const theme = useTheme();
  const isMobile = useSelector((state) => state.content.isMobile);

  // let { id } = useParams();
  let id = post.data.id;

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  if (status === "failed") {
    return <div>{error}</div>;
  }
  if (status === "loading") {
    return (
      <Box
        className="loadTest"
        sx={{
          padding: isMobile ? "1rem" : "2rem 12rem 2rem 12rem",
          backgroundColor: theme.palette.primary.medLight,
        }}
        elevation={0}
      >
        <Loading />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: theme.palette.primary.medLight,
        paddingTop: 0,
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ flex: 1 }} />
        <IconButton onClick={handleClose}>
          <CloseIcon sx={{ color: theme.palette.primary.main, fontSize: 30 }} />
        </IconButton>
      </Box>

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
