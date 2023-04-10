import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "./displaySlice";
import Card from "./Card";
import Comments from "./Comments";

export const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.content.details);
  const status = useSelector((state) => state.content.detailStatus);
  const error = useSelector((state) => state.content.error);

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);
  console.log("STATUS", status);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }
  console.log("card details", details);
  return (
    <div
      style={{
        display: "flex",
        marginTop: "70px",
      }}
    >
      <Card style={{ flex: 1 }} post={details[0].data.children[0]} />
      <Comments style={{ flex: 1 }} />
    </div>
  );
};
