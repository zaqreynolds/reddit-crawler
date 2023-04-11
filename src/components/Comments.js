import React from "react";
import { useSelector } from "react-redux";

const Comments = ({ comments }) => {
  return (
    <ul style={{ color: "white" }}>
      {comments.map(
        (comment) =>
          comment.kind !== "more" && (
            <li key={comment.data.id}>
              {comment.data.body}{" "}
              {comment.data?.replies?.data?.children?.length &&
                comment.data.replies.kind !== "more" && (
                  <Comments comments={comment.data.replies?.data?.children} />
                )}
            </li>
          )
      )}
    </ul>
  );
};

export default Comments;
