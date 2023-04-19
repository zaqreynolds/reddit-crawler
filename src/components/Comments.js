import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <ul style={{ color: "white" }}>
      {comments.map(
        (comment) =>
          comment.kind !== "more" && (
            <Comment comment={comment} key={comment.data.id} />
          )
      )}
    </ul>
  );
};

export default Comments;
