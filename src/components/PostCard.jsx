import React, { forwardRef, useState } from "react";
import { useTheme } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import { formatForMarkdown } from "../utils/formatForMarkdown";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import FatDivider from "./FatDivider";
import { Details } from "../views/Details";

const PostCard = forwardRef((props, ref) => {
  const { post, details = false } = props;
  const theme = useTheme();
  const viewMode = useSelector((state) => state.content.viewMode);
  const islocation = useLocation();
  const isAtIndex = islocation.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  const clickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const selfTextTruncate = (post) => {
    if (isAtIndex && post.data.selftext.length > 1000) {
      return post.data.selftext.substring(0, 1000) + "...";
    } else if (post.data.selftext.length > 500) {
      return post.data.selftext;
    }
  };

  const mediaType = (post) => {
    // console.log(post.data);
    if (post.data.post_hint === "image") {
      return (
        <img
          className="cardImage"
          src={post.data.url}
          alt=""
          style={{ maxWidth: "100%" }}
        />
      );
    } else if (post.data.post_hint === "hosted:video") {
      return (
        <ReactPlayer
          url={post.data.secure_media.reddit_video.dash_url}
          playing={false}
          controls={true}
          width="100%"
          height="100%"
        />
      );
    } else if (post.data.post_hint === "rich:video") {
      return (
        <ReactPlayer
          url={post.data.url}
          playing={false}
          controls={true}
          width="100%"
          height="100%"
        />
      );
    } else if (post.data.thumbnail === "nsfw") {
      return (
        <Link className="cardLink" href={post.data.url} color="error">
          NSFW
        </Link>
      );
    } else {
      return (
        <Box>
          <ReactMarkdown>
            {formatForMarkdown(selfTextTruncate(post))}
          </ReactMarkdown>
          {/* {post.data.preview &&
            post.data.preview.images &&
            post.data.preview.images[0].source.url && (
              <img
                className="cardImage2"
                src={post.data.preview.images[0].source.url}
                alt=""
                style={{ maxWidth: "100%" }}
              />
            )} */}

          <Button size="small" color="inherit">
            <Tooltip
              title="click to follow external link"
              placement="right"
              arrow
            >
              <Link
                className="cardLink"
                href={post.data.url}
                target="_blank"
                sx={{ color: theme.palette.linkText.main }}
              >
                {post.data.thumbnail && (
                  <Typography>Click for original post</Typography>
                )}
              </Link>
            </Tooltip>
          </Button>
        </Box>
      );
    }
  };

  const primaryMediumColor = theme.palette.primary.medium;

  return (
    <Card
      elevation={20}
      sx={{ width: viewMode === "linear" ? "60%" : undefined }}
    >
      <CardContent
        sx={{
          textAlign: "center",
          "&:last-child": {
            pb: 1,
          },
        }}
      >
        <Typography className="cardTitle">
          <b>{post.data.title}</b>
        </Typography>
        <FatDivider />
        <Typography className="cardAuthoer" variant="caption">
          <em>posted by:</em> {post.data.author}
        </Typography>

        <Box className="cardMedia" ref={ref}>
          {mediaType(post)}
        </Box>
        {!details && (
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: primaryMediumColor, m: 1 }}
            onClick={() => clickOpen()}
          >
            {/* <NavLink
            to={`/${post.data.id}`}
            activeclassname="active"
            elevation={6}
            style={{ textDecoration: "none" }}
          > */}
            <Typography
              className="cardComments"
              sx={{ color: "white" }}
              elevation={10}
            >
              Comments: {post.data.num_comments}
            </Typography>
            {/* </NavLink> */}
          </Button>
        )}
      </CardContent>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        // maxWidth="lg"
        fullWidth={true}
        // sx={{ overflow: "hidden" }}
      >
        <Details post={post} handleClose={handleClose} />
      </Dialog>
    </Card>
  );
});

export default PostCard;
