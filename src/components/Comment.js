import {
  Box,
  Divider,
  IconButton,
  Link,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { formatForMarkdown } from "../utils/formatForMarkdown";
import Comments from "./Comments";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        width: "100%",
        paddingBottom: isFirst ? 1 : 0,
        paddingRight: isFirst ? 1 : 0,
        paddingTop: isFirst ? 1 : 0,
      }}
    >
      <Typography sx={{ color: theme.palette.primary.lighter }}>
        <b>{comment.data.author}</b>
      </Typography>
      <Box
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        <Box sx={{ color: theme.palette.primary.lighter }}>
          <ReactMarkdown components={{ a: Link }}>
            {formatForMarkdown(comment.data.body)}
          </ReactMarkdown>
        </Box>
        {hasReplies && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ flex: 1 }} />
            <IconButton
              onClick={toggle}
              size="small"
              sx={{
                transition: "transform 0.2s ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                display: "inline-flex",
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        )}
      </Box>

      {hasReplies && comment.data.replies.kind !== "more" && open && (
        <Box sx={{ width: "100%" }}>
          <Divider sx={{ marginBottom: 1, marginRight: 1 }} />

          <Comments
            comments={comment.data.replies?.data?.children}
            isFirst={false}
          />
        </Box>
      )}
    </ListItem>
  );
};

export default Comment;
