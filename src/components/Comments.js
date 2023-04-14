import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <ul style={{ color: "white" }}>
      {comments.map(
        (comment) => comment.kind !== "more" && <Comment comment={comment} />
      )}
    </ul>
  );
};

export default Comments;
