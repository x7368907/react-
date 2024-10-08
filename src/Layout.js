import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/about">關於我們</Link>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
