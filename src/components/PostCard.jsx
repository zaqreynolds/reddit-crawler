import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  ListItem,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const PostCard = ({ post }) => {
  const mediaType = (post) => {
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
        <a className="cardLink" href={post.data.url}>
          NSFW
        </a>
      );
    } else {
      return (
        <a className="cardLink" href={post.data.url}>
          Click for More!
        </a>
      );
    }
  };

  const theme = useTheme(); // Get the theme
  const primaryLighterColor = theme.palette.primary.lighter; // Get the primary.lighter color

  return (
    <Card elevation={6}>
      <CardContent sx={{ textAlign: "center" }}>
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
          style={{ backgroundColor: primaryLighterColor }}
        >
          <NavLink
            to={`/${post.data.id}`}
            activeclassname="active"
            elevation={3}
          >
            <Typography className="cardComments">
              Comments:{post.data.num_comments}
            </Typography>
          </NavLink>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCard;
