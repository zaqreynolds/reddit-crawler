import { List, Paper, useTheme } from "@mui/material";
import React, { Fragment } from "react";

import Comment from "./Comment";

const Comments = ({ comments, isFirst }) => {
  const theme = useTheme();

  return (
    <List
      sx={{
        padding: isFirst ? 1 : 0,
      }}
    >
      {comments.map(
        (comment) =>
          comment.kind !== "more" && (
            <Fragment key={comment.data.id}>
              {isFirst && (
                <Paper
                  elevation={6}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    marginBottom: "0.5rem",
                  }}
                >
                  <Comment
                    comment={comment}
                    key={comment.data.id}
                    isFirst={isFirst}
                  />
                </Paper>
              )}
              {!isFirst && (
                <Fragment key={comment.data.id}>
                  <Comment comment={comment} isFirst={isFirst} />
                </Fragment>
              )}
            </Fragment>
          )
      )}
    </List>
  );
};

export default Comments;
