import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Copyright from "./Copyright";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Layout;
