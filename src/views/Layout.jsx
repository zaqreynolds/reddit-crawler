import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "primary.lighter" }}>
      <Header />
      <Toolbar sx={{ mb: 2 }} />
      <Outlet />
    </Box>
  );
};

export default Layout;
