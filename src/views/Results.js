import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../components/displaySlice";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Filter from "../components/Filter";
import BottomNav from "../components/BottomNav";
import Card from "../components/PostCard";
import Loading from "../components/Loading";
import { Box, Container } from "@mui/material";

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
      <Box id="results">
        <Box id="searchFilter">
          <Search />
          <Filter />
        </Box>

        <ul className="resultsList">
          {posts.map((post) => (
            <Card post={post} key={post.data.id} />
          ))}
        </ul>
      </Box>
      <BottomNav />
    </Container>
  );
};
