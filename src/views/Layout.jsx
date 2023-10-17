import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "primary.lighter", minHeight: "100vh" }}>
      <Header />
      <Toolbar sx={{ mb: 2 }} />
      <Outlet />
    </Box>
  );
};

export default Layout;
