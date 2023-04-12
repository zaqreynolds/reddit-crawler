import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#182a35",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        id="Header"
        style={{
          flexShrink: 1,
          textAlign: "center",
          borderBottom: "1px solid black",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 5,
          backgroundColor: "snow",
        }}
      >
        <Link to="/">
          <h1 style={{ margin: 0 }}>Reddit Crawler</h1>
        </Link>
      </div>
      <div id="TopSpacer" style={{ height: "38px" }} />
      <Outlet />
    </div>
  );
};

export default Layout;
