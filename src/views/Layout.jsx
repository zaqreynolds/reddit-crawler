import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.lighter",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
