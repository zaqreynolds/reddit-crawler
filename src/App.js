import React from "react";
import { Results } from "./components/Results";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import { BottomNav } from "./components/BottomNav";

function App() {
  return (
    <div style={{ backgroundColor: "#182a35" }}>
      <h1
        style={{
          textAlign: "center",
          borderBottom: "1px solid black",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "5",
          backgroundColor: "snow",
          marginTop: "0",
        }}
      >
        Reddit Crawler
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Search />
        <Filter />
        <Results />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
