import React from "react";
import { useState, useRef } from "react";
import Comments from "./Comments";

const Comment = ({ comment }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <li key={comment.data.id}>
      {comment.data.body}{" "}
      <button onClick={toggle}>{open ? "close" : "open"}</button>
      {comment.data?.replies?.data?.children?.length &&
        comment.data.replies.kind !== "more" &&
        open && <Comments comments={comment.data.replies?.data?.children} />}
    </li>
  );
};

export default Comment;
