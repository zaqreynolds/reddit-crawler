import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      id="generalBody"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        // overflow: "hidden",
      }}
    >
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
