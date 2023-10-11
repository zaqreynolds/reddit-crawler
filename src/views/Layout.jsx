import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const todos = [
  "To Do:",
  "handle the multiple keys/IDs error",
  "fix comments padding",
  "fix post media get errors and maybe add a default image for no accessible content",
  "auto scoll to top on viewmode toggle and comments",
  "fix NavBar styling",
  "make NavBar responsive",
  "fix LOADING UX",
  "add comment author",
  "make comment bullet dynamic",
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
