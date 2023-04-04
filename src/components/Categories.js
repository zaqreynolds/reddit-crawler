import React from "react";

export const Categories = () => {
  const topicsRough = [
    "Gaming",
    "Sports",
    "Business, Economics, and Finance",
    "Crypto",
    "Televesion",
    "Celebrity",
    "Animals and Pets",
    "Anime",
    "Art",
    "Cars and Motor Vehicles",
    "Crafts and DIY",
    "Ethics and Philosophy",
    "Fashion",
    "Food and Drink",
    "History",
    "Hobbies",
    "Law",
    "Learning and Education",
    "Military",
    "Movies",
    "Music",
    "Place",
    "Podcasts and Streamers",
    "Politics",
    "Programming",
    "Reading, Writing, and Literature",
    "Religiion and Spirituality",
    "Science",
    "Tabletop Games",
    "Technology",
    "Travel",
  ];
  const topics = topicsRough.sort();

  return (
    <div
      style={{
        display: "inline-flex",
        marginTop: "38px",
        width: "25%",
        float: "left",
        position: "relative",
      }}
    >
      <h2 style={{ color: "white" }}>Topics:</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic} style={{ color: "white" }}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};
