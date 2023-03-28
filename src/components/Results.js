import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "./displaySlice";

export const Results = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.content.data.data.children);
  const status = useSelector((state) => state.content.status);
  const error = useSelector((state) => state.content.error);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  //   const [listings, setListings] = useState([]);

  //   console.log(listings);

  //   useEffect(() => {
  //     fetch("https://www.reddit.com/hot.json")
  //       .then((response) => response.json())
  //       .then((data) => setListings(data.data.children));
  //   }, []);
  console.log("THE SHL33M", posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.data.id} style={{ listStyleType: "none" }}>
          {post.data.title}
        </li>
      ))}
    </ul>
  );
};
