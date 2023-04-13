import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "./displaySlice";
import Card from "./Card";
import Comments from "./Comments";
import Loading from "./Loading";

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
    <div
      style={{
        display: "flex",
        marginTop: "70px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div id="detailCard" style={{ maxWidth: "80%" }}>
        <Card post={details[0].data.children[0]} />
      </div>
      <div
        id="commentsContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "0 auto",
          maxWidth: "95%",
        }}
      >
        <h2
          style={{
            color: "white",
            paddingLeft: "10px",
            display: "block",
            width: "100%",
            height: "fitContent",
            textAlign: "center",
          }}
        >
          Comments:
        </h2>
        <Comments comments={details[1].data.children} />
      </div>
    </div>
  );
};
