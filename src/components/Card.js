import ReactPlayer from "react-player";

const Card = ({ post }) => {
  const mediaType = (post) => {
    if (post.data.post_hint === "image") {
      return (
        <img src={post.data.url} style={{ paddingTop: "10px" }} alt=""></img>
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
    <li style={{ listStyleType: "none" }}>
      <div
        style={{
          margin: "0px auto 10px auto",
          border: "1px solid black",
          padding: "10px",
          height: "fit-content",
          width: "500px",
          borderRadius: "5px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "snow",
        }}
      >
        <div style={{ fontWeight: "bold" }}>{post.data.title}</div>
        <br></br>
        {post.data.author}
        <br></br>
        {mediaType(post)}
        <br></br>
        <div>Comments:{post.data.num_comments}</div>
      </div>
    </li>
  );
};

export default Card;
