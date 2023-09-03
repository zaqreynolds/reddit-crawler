import { Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Comments from "./Comments";

const Comment = ({ comment }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const buttonClass = comment.data.replies ? "withReplies" : "noReplies";
  return (
    <li>
      <Typography>{comment.data.body} </Typography>
      <button className={buttonClass} onClick={toggle}>
        {open ? "close" : "replies"}
      </button>
      {comment.data?.replies?.data?.children?.length &&
        comment.data.replies.kind !== "more" &&
        open && <Comments comments={comment.data.replies?.data?.children} />}
    </li>
  );
};

export default Comment;
