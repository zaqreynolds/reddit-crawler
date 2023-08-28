import { AppBar, Toolbar, Typography } from "@mui/material";
import Filter from "./Filter";
import Search from "./Search";
import ViewButton from "./ViewButton";

const Header = () => {
  return (
    <AppBar position="static" elevation={16} sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Reddit Crawler</Typography>
        <Search />
        <Filter />
        <ViewButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
