import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../components/displaySlice";
import PostCard from "../components/PostCard";
import Comments from "../components/Comments";
import Loading from "../components/Loading";

export const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.content.details);
  const status = useSelector((state) => state.content.detailStatus);
  const error = useSelector((state) => state.content.error);

  let { id } = useParams();

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
  return (
    <div className="details">
      <div id="detailCard">
        <PostCard post={details[0].data.children[0]} />
      </div>
      <div className="commentsContainer">
        <h2>Comments:</h2>
        <Comments comments={details[1].data.children} />
      </div>
    </div>
  );
};
