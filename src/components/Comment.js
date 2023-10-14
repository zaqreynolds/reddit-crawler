import {
  Box,
  Button,
  Link,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { formatForMarkdown } from "../utils/formatForMarkdown";
import rehypeRaw from "rehype-raw";
import Comments from "./Comments";

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
        paddingTop: isFirst ? 1 : 0,
      }}
    >
      <Box>
        <Typography sx={{ color: theme.palette.primary.main }}>
          <b>{comment.data.author}</b>
        </Typography>
        <Box sx={{ color: theme.palette.primary.main }}>
          <ReactMarkdown
            // rehypePlugins={[rehypeRaw]}
            components={{ a: Link }}
          >
            {formatForMarkdown(comment.data.body)}
          </ReactMarkdown>
          {hasReplies && (
            <Box
              sx={{
                display: "inline-flex",
                marginLeft: "0.3rem",
              }}
            >
              <Button onClick={toggle} size="small" variant="outlined">
                {open ? "close" : "replies"}
              </Button>
              {open ? <Box sx={{ flex: 1 }} /> : null}
            </Box>
          )}
        </Box>
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
