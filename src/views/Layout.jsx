import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const todos = [
  "To Do:",
  "handle the multiple keys/IDs error",
  "auto scoll to top on viewmode toggle and comments",
  "fix NavBar styling",
  "make NavBar responsive",
  "fix LOADING UX",
  "look into posts expanding beyond card",
  "fix if comment is deleted",
  "knownIssues: posts written in markdown are not rendered properly",
];
const Layout = () => {
  //console just for TODOs
  console.table(todos);
  return (
    <Box sx={{ backgroundColor: "primary.lighter" }}>
      <Header />
      <Toolbar sx={{ mb: 2 }} />
      <Outlet />
    </Box>
  );
};

export default Layout;
