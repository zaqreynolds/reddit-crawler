import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import FatDivider from "./FatDivider";

const PostCard = ({ post }) => {
  const viewMode = useSelector((state) => state.content.viewMode);
  const isMobile = useSelector((state) => state.content.viewMode);
  const islocation = useLocation();
  const isAtIndex = islocation.pathname === "/";
  const selfTextTruncate = (post) => {
    if (isAtIndex && post.data.selftext.length > 1000) {
      return post.data.selftext.substring(0, 1000) + "...";
    } else {
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
        <Link className="cardLink" href={post.data.url}>
          NSFW
        </Link>
      );
    } else {
      return (
        <Box>
          <Typography>{selfTextTruncate(post)}</Typography>
          {post.data.preview &&
            post.data.preview.images &&
            post.data.preview.images[0].resolutions[0].url && (
              <img
                className="cardImage2"
                src={post.data.preview.images[0].resolutions[0].url}
                alt=""
                style={{ maxWidth: "100%" }}
              />
            )}

          <Button size="small" color="inherit">
            <Link className="cardLink" href={post.data.url} color="inherit">
              {post.data.thumbnail && (
                <img
                  href={post.data.url}
                  src={post.data.thumbnail}
                  alt=""
                  className="thumbnail"
                />
              )}
              {!post.data.thumbnail && <Typography>Click for More!</Typography>}
            </Link>
          </Button>
        </Box>
      );
    }
  };

  const theme = useTheme();
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

        <Box
          className="cardMedia"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {mediaType(post)}
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: primaryMediumColor, m: 1 }}
        >
          <NavLink
            to={`/${post.data.id}`}
            activeclassname="active"
            elevation={6}
            style={{ textDecoration: "none" }}
          >
            <Typography
              className="cardComments"
              sx={{ color: "white" }}
              elevation={10}
            >
              Comments: {post.data.num_comments}
            </Typography>
          </NavLink>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCard;
