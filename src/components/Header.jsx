import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import Search from "./Search";
import ViewButton from "./ViewButton";

const Header = () => {
  const isMobile = useSelector((state) => state.content.isMobile);

  return (
    <AppBar position="fixed" elevation={24} sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">
          <b>Reddit Crawler</b>
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Search />
        <Filter />
        {!isMobile && <ViewButton />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
