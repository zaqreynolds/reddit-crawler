import ReactPlayer from "react-player";

const Card = ({ post }) => {
  const mediaType = (post) => {
    if (post.data.post_hint === "image") {
      return (
        <img
          src={post.data.url}
          style={{
            paddingTop: "10px",
            width: "100%",
          }}
          alt=""
        ></img>
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
        <a href={post.data.url} style={{ color: "blue" }}>
          NSFW
        </a>
      );
    } else {
      return (
        <a href={post.data.url} style={{ color: "blue" }}>
          Click for More!
        </a>
      );
    }
  };
  return (
    <li
      style={{
        listStyleType: "none",
        marginBottom: "10px",
        border: "1px solid black",
        padding: "10px",
        width: "100%",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "snow",
        boxSizing: "border-box",
        boxShadow: "0px 5px 5px 2px dimGrey",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "17px" }}>
        {post.data.title}
      </div>
      <div>{post.data.author}</div>
      <div>{mediaType(post)}</div>
      <div>Comments:{post.data.num_comments}</div>
    </li>
  );
};

export default Card;
