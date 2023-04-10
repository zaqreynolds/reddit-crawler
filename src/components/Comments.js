import React from "react";
import { useSelector } from "react-redux";

const Comments = () => {
  const details = useSelector((state) => state.content.details[1].data);

  return (
    <div style={{ display: "flex", marginLeft: "0 auto" }}>
      <h2 style={{ color: "white", paddingLeft: "10px" }}>Comments:</h2>
      <ul style={{ color: "white" }}>
        {details.children.map((comment) => (
          <li>{comment.data.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
