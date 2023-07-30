import React from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../topMenu/TopMenu/TopMenu";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <main className="layuot">
        <Outlet />
      </main>

      <TopMenu />
      <Footer />
    </>
  );
};

export default Layout;
