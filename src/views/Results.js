import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContent,
  incrementPageCount,
  nextList,
} from "../components/slices/contentSlice";
import Loading from "../components/Loading";
import { Box, List, ListItem } from "@mui/material";
import PostCard from "../components/PostCard";
import { Masonry } from "@mui/lab";

export const Results = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.settings.viewMode);
  const status = useSelector((state) => state.content.status);
  const error = useSelector((state) => state.content.error);
  const searchString = useSelector((state) => state.content.searchString);
  const after = useSelector((state) => state.content.data?.data?.after);
  const containerRef = useRef(null);
  const lastPostRef = useRef(null);

  const posts = useSelector((state) => {
    if (state.content.data?.data) {
      return state.content.data.data.children;
    }
    return [];
  });

  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  useEffect(() => {
    if (searchString || searchString === "") {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    }
  }, [searchString]);

  //Infinite Scrolling :)
  useEffect(() => {
    if (lastPostRef.current && status === "succeeded") {
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
        { threshold: viewMode === "linear" ? 0.4 : 0.9 }, // Observe when the this amount of the target is visible
      );

      // Unobserve current (this will unobserve the old last post if there was one)
      observer.unobserve(lastPostRef.current);

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
    } else {
      return;
    }
  }, [lastPostRef, dispatch, status, posts, after, viewMode]);

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <>
      {viewMode === "linear" && (
        <List sx={{ overflow: "auto" }} ref={containerRef}>
          {posts.map((post, index) => (
            <ListItem
              sx={{
                justifyContent: "center",
                px: 0,
              }}
              key={post.data.id}
              ref={index === posts.length - 1 ? lastPostRef : null}>
              <PostCard post={post} />
            </ListItem>
          ))}
          {status === "loading" && (
            <>
              <ListItem
                sx={{
                  justifyContent: "center",
                  px: 0,
                }}>
                <Loading viewMode={viewMode} />
              </ListItem>
              <ListItem
                sx={{
                  justifyContent: "center",
                  px: 0,
                }}>
                <Loading viewMode={viewMode} />
              </ListItem>
              <ListItem
                sx={{
                  justifyContent: "center",
                  px: 0,
                }}>
                <Loading viewMode={viewMode} />
              </ListItem>
            </>
          )}
        </List>
      )}

      {viewMode === "masonry" && (
        <Box
          sx={{ width: "100%", overflow: "auto", paddingTop: 1 }}
          ref={containerRef}>
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
            {status === "loading" && (
              <>
                <Box sx={{ width: "100%" }}>
                  <Loading viewMode={viewMode} />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Loading viewMode={viewMode} />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Loading viewMode={viewMode} />
                </Box>
              </>
            )}
          </Masonry>
        </Box>
      )}
    </>
  );
};
