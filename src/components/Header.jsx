import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" elevation={6}>
      <Toolbar>
        <Typography variant="h6">Reddit Crawler</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
