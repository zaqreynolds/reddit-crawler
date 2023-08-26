import { Box, Card, CardContent, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const PostCard = ({ post }) => {
  const mediaType = (post) => {
    if (post.data.post_hint === "image") {
      return <img className="cardImage" src={post.data.url} alt=""></img>;
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
  return (
    <Card className="cardInfo" elevation={6}>
      <CardContent>
        <Typography className="cardTitle">{post.data.title}</Typography>
        <Typography className="cardAuthoer">
          <em>posted by:</em> {post.data.author}
        </Typography>

        <Box className="cardMedia">{mediaType(post)}</Box>
        <NavLink to={`/${post.data.id}`} activeclassname="active">
          <Typography className="cardComments">
            Comments:{post.data.num_comments}
          </Typography>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default PostCard;
