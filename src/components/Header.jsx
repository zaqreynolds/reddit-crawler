import { useTheme } from "@emotion/react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Filter from "./Filter";
import Search from "./Search";
import ViewButton from "./ViewButton";

const Header = () => {
  const isMobile = useSelector((state) => state.content.isMobile);
  const islocation = useLocation();
  const theme = useTheme();

  const isAtIndex = islocation.pathname === "/";
  const isHome = () => {
    if (isAtIndex) {
      return (
        <Typography variant="h6" sx={{ color: theme.palette.primary.lighter }}>
          <b>Reddit Crawler</b>
        </Typography>
      );
    } else {
      return (
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.primary.lighter }}
          >
            <b>Reddit Crawler</b>
          </Typography>
        </Link>
      );
    }
  };

  return (
    <AppBar position="fixed" elevation={24} sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {isHome()}
        <Box sx={{ flex: 1 }} />
        <Search />
        <Filter />
        {!isMobile && <ViewButton />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
