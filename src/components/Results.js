import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "./displaySlice";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

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
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  const mediaType = (post) => {
    if (post.data.post_hint === "image") {
      return (
        <img src={post.data.url} style={{ paddingTop: "10px" }} alt=""></img>
      );
    } else if (post.data.post_hint === "hosted:video") {
      return (
        <ReactPlayer
          url={post.data.secure_media.reddit_video.dash_url}
          playing={false}
          controls={true}
          width="100%"
          height="100%"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        clear: "right",
      }}
    >
      <ul style={{ paddingTop: "38px" }}>
        {posts.map((post) => (
          <li key={post.data.id} style={{ listStyleType: "none" }}>
            <div
              style={{
                margin: "0px auto 10px auto",
                border: "1px solid black",
                padding: "10px",
                height: "fit-content",
                width: "500px",
                borderRadius: "5px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "snow",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{post.data.title}</div>
              <br></br>
              {post.data.author}
              <br></br>
              {mediaType(post)}
              <br></br>
              <div>
                <Link to={`/post/${post.data.id}`}>
                  Comments:{post.data.num_comments}
                </Link>
                <br></br>
                {/* ups:{post.data.ups}
                <br></br>
                upvote ratio: {post.data.upvote_ratio}
                <br></br>
                downs: {post.data.downs} */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
