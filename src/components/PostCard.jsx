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
import { NavLink } from "react-router-dom";

const PostCard = ({ post }) => {
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
          <Typography>{post.data.selftext}</Typography>
          {post.data.preview && post.data.preview.images && (
            <img
              className="cardImage2"
              src={post.data.preview.images[0].resolutions[2].url}
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
    <Card elevation={20}>
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
            <Typography className="cardComments" sx={{ color: "white" }}>
              Comments: {post.data.num_comments}
            </Typography>
          </NavLink>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCard;
