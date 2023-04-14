import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div id="generalBody">
      <div id="header">
        <Link to="/">
          <h1>Reddit Crawler</h1>
        </Link>
      </div>
      <div id="topSpacer" />
      <Outlet />
    </div>
  );
};

export default Layout;
