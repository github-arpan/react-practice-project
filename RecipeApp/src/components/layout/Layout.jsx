import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "..";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
