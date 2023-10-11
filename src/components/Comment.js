import { Box, Button, ListItem, Typography, useTheme } from "@mui/material";
import React from "react";
import { useState } from "react";
import Comments from "./Comments";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

const Comment = ({ comment, isFirst }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const theme = useTheme();
  const hasReplies =
    comment.data.replies?.data?.children.length &&
    comment.data.replies?.data?.children[0].kind !== "more";
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "fit-content",
        paddingBottom: isFirst ? 1 : 0,
        paddingRight: isFirst ? 1 : 0,
      }}
    >
      <Box>
        <Typography sx={{ color: theme.palette.primary.main }}>
          {isFirst ? null : "•"} {comment.data.body}
        </Typography>
        {hasReplies && (
          <>
            <Button
              onClick={toggle}
              size="small"
              variant="outlined"
              sx={{ marginLeft: "0.3rem" }}
            >
              {open ? "close" : "replies"}
            </Button>{" "}
            {open ? <Box sx={{ flex: 1 }} /> : null}
          </>
        )}
      </Box>

      {hasReplies && comment.data.replies.kind !== "more" && open && (
        <Comments
          comments={comment.data.replies?.data?.children}
          isFirst={false}
        />
      )}
    </ListItem>
  );
};

export default Comment;
