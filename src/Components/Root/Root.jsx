import React from "react";
import Nav from "../Layout/Nav";
import { Outlet } from "react-router";
import Footer from "../Layout/Footer";
const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
