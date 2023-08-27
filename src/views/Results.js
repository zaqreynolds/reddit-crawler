import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../components/displaySlice";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Filter from "../components/Filter";
import BottomNav from "../components/BottomNav";
import Loading from "../components/Loading";
import { Box, Button, List } from "@mui/material";
import PostCard from "../components/PostCard";
import { Masonry } from "@mui/lab";

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

    if (status === "loading") {
      return <Loading />;
    }

    if (status === "failed") {
      return <div>{error}</div>;
    }
  }, [dispatch]);

  const [viewMode, setViewMode] = useState("linear");
  const toggleViewMode = () => {
    setViewMode(viewMode === "linear" ? "masonry" : "linear");
  };

  return (
    <Box sx={{ m: 0, justifyContent: "center" }}>
      <Box
        id="results"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box id="searchFilter" sx={{ display: "flex" }}>
          <Search />
          <Filter />
          <Button onClick={() => toggleViewMode()}>Toggle View</Button>
        </Box>
        {/* THIS IS FOR LINEAR */}
        {viewMode === "linear" && (
          <List>
            {posts.map((post) => (
              <PostCard post={post} key={post.data.id} />
            ))}
          </List>
        )}
        {/* THIS IS FOR MASONRY */}
        {viewMode === "masonry" && (
          <Masonry columns={{ xs: 1, sm: 3, md: 4, lg: 5 }}>
            {posts.map((post) => (
              <PostCard post={post} key={post.data.id} sx={{ width: "100%" }} />
            ))}
          </Masonry>
        )}
      </Box>
      <BottomNav />
    </Box>
  );
};
