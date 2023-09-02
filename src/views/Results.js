import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent, setViewMode } from "../components/displaySlice";
import BottomNav from "../components/BottomNav";
import Loading from "../components/Loading";
import { Box, List, ListItem } from "@mui/material";
import PostCard from "../components/PostCard";
import { Masonry } from "@mui/lab";

export const Results = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.content.viewMode);
  const isMobile = useSelector((state) => state.content.isMobile);

  const posts = useSelector((state) => {
    if (state.content.data?.data) {
      return state.content.data.data.children;
    }
    return [];
  });
  const status = useSelector((state) => state.content.status);
  const error = useSelector((state) => state.content.error);
  console.log(status);
  useEffect(() => {
    dispatch(fetchContent());

    if (status === "loading") {
      return <Loading />;
    }

    if (status === "failed") {
      return <div>{error}</div>;
    }
  }, [dispatch]);

  useEffect(() => {
    if (isMobile) {
      dispatch(setViewMode("masonry"));
    } else {
      dispatch(setViewMode("linear"));
    }
  }, [isMobile, dispatch]);
  return (
    <Box id="what" sx={{ m: 0, justifyContent: "center" }}>
      <Box
        id="results"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 0,
        }}
      >
        {/* THIS IS FOR LINEAR */}
        {viewMode === "linear" && (
          <List sx={{ m: 0 }}>
            {posts.map((post) => (
              <ListItem
                sx={{
                  justifyContent: "center",
                  px: 0,
                }}
                key={post.data.id}
              >
                <PostCard post={post} />
              </ListItem>
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
