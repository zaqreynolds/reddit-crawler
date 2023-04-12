import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "./displaySlice";

import { Link } from "react-router-dom";
import Search from "./Search";
import Filter from "./Filter";
import BottomNav from "./BottomNav";
import Card from "./Card";

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
    return <div style={{ color: "red" }}>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }
  console.log("THE LIST", posts);
  return (
    <>
      <div
        id="Results"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <div
          id="SearchFilter"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Search />
          <Filter />
        </div>

        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "550px",
            padding: 0,
            margin: 0,
          }}
        >
          {posts.map((post) => (
            <Link to={`/${post.data.id}`} key={post.data.id}>
              <Card post={post} />
            </Link>
          ))}
        </ul>
      </div>
      <BottomNav />
    </>
  );
};
