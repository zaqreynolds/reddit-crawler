import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContent,
  incrementPageCount,
  nextList,
  setViewMode,
} from "../components/displaySlice";
import Loading from "../components/Loading";
import BottomNav from "../components/BottomNav";
import { Box, List, ListItem } from "@mui/material";
import PostCard from "../components/PostCard";
import { Masonry } from "@mui/lab";

export const Results = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.content.viewMode);
  const isMobile = useSelector((state) => state.content.isMobile);
  const pageCount = useSelector((state) => state.content.pageCount);
  const content = useSelector((state) => state.content);
  const lastPostRef = useRef(null);

  const posts = useSelector((state) => {
    if (state.content.data?.data) {
      return state.content.data.data.children;
    }
    return [];
  });
  const status = useSelector((state) => state.content.status);
  const error = useSelector((state) => state.content.error);

  const after = useSelector((state) => state.content.data?.data?.after);

  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  useEffect(() => {
    if (isMobile) {
      dispatch(setViewMode("masonry"));
    } else {
      dispatch(setViewMode("linear"));
    }
  }, [isMobile, dispatch]);

  //Infinite Scrolling :)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the last post is visible on viewport
        if (
          entries[0].isIntersecting &&
          status !== "loading" &&
          lastPostRef.current
        ) {
          dispatch(nextList(after)); // Fetch more data when the last post is visible
          dispatch(incrementPageCount());
        }
      },
      { threshold: 0.7 } // Observe when the this amount of the target is visible
    );

    // Unobserve current (this will unobserve the old last post if there was one)
    if (lastPostRef.current) {
      observer.unobserve(lastPostRef.current);
    }

    // Then, re-observe the last post
    if (lastPostRef.current) {
      observer.observe(lastPostRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (lastPostRef.current) {
        observer.unobserve(lastPostRef.current);
      }
    };
  }, [lastPostRef, dispatch, status, posts, after, viewMode]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <Box sx={{ m: 0, justifyContent: "center" }}>
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
            {posts.map((post, index) => (
              <ListItem
                sx={{
                  justifyContent: "center",
                  px: 0,
                }}
                key={post.data.id}
                ref={index === posts.length - 1 ? lastPostRef : null}
              >
                <PostCard post={post} />
              </ListItem>
            ))}
          </List>
        )}
        {/* THIS IS FOR MASONRY */}
        {viewMode === "masonry" && (
          <>
            <Masonry columns={{ xs: 1, sm: 3, md: 4, lg: 5 }}>
              {posts.map((post, index) => {
                return (
                  <PostCard
                    post={post}
                    key={post.data.id}
                    sx={{ width: "100%" }}
                    ref={index === posts.length - 1 ? lastPostRef : null}
                  />
                );
              })}
            </Masonry>
          </>
        )}
      </Box>
      {/* <BottomNav /> */}
    </Box>
  );
};
