import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const todos = [
  "To Do:",
  "fix NavBar styling",
  "remove deprecated functions",
  "knownIssues: posts with markDown require more work for handling all edge cases",
];
const Layout = () => {
  //console just for TODOs
  console.table(todos);
  return (
    <Box sx={{ backgroundColor: "primary.lighter", minHeight: "100vh" }}>
      <Header />
      <Toolbar sx={{ mb: 2 }} />
      <Outlet />
    </Box>
  );
};

export default Layout;
