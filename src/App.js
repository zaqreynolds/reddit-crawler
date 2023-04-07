import React from "react";
import { Results } from "./components/Results";
import { Route, Routes } from "react-router-dom";
import { Details } from "./components/Details";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Results />} />
        <Route path=":id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
