import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
