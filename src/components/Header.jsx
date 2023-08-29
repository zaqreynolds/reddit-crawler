import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Filter from "./Filter";
import Search from "./Search";
import ViewButton from "./ViewButton";

const Header = () => {
  return (
    <AppBar position="fixed" elevation={16} sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">
          <b>Reddit Crawler</b>
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Search />
        <Box sx={{ flex: 1 }} />
        <Filter />
        <Box sx={{ flex: 1 }} />
        <ViewButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
