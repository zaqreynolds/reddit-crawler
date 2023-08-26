import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../components/displaySlice";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Filter from "../components/Filter";
import BottomNav from "../components/BottomNav";
import Loading from "../components/Loading";
import { Box, Container, List, ListItem } from "@mui/material";
import PostCard from "../components/PostCard";

export const Results = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    if (state.content.data?.data) {
      return state.content.data.data.children;
    }
    return [];
  });
  const status = useSelector((state) => state.content.status);
  const error = useSelector((state) => state.content.error);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }
  return (
    <Container>
      <Box
        id="results"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box id="searchFilter">
          <Search />
          <Filter />
        </Box>

        <List>
          {posts.map((post) => (
            <PostCard post={post} key={post.data.id} />
          ))}
        </List>
      </Box>
      <BottomNav />
    </Container>
  );
};
