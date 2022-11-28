//import { Fragment } from "react";
//import React from "react";
// these are two possible solutions.
// Updated versions of Next and React seems to require
// imports again.
import Header from "./Header";

import { Fragment } from "react";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <p>header</p>
      {children}
      <p>footer</p>
    </Fragment>
  );
};

export default Layout;
