import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    // <div
    //   id="generalBody"
    //   style={{
    //     height: "100vh",
    //     width: "100vw",
    //     display: "flex",
    //     flexDirection: "column",
    //     // overflow: "hidden",
    //   }}
    // >
    //   <div id="header">
    //     <Link to="/">
    //       <h1>Reddit Crawler</h1>
    //     </Link>
    //   </div>
    //   <div id="topSpacer" />
    //   <Outlet />
    // </div>
    <Box>
      <Header />
    </Box>
  );
};

export default Layout;
