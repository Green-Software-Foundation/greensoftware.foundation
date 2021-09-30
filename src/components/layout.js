import * as React from "react";
import { Link } from "gatsby";

// Components
import Navbar from "./navbar";

// Fonts
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/800.css";

// Styles
import "../styles/common.css";
import "../styles/components/layout.scss";

const Layout = ({ children }) => {
  return (
    <main className="page-layout">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
