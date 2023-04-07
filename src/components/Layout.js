import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "#182a35" }}>
      <Link to="/">
        <h1
          style={{
            textAlign: "center",
            borderBottom: "1px solid black",
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "5",
            backgroundColor: "snow",
            marginTop: "0",
          }}
        >
          Reddit Crawler
        </h1>
      </Link>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
