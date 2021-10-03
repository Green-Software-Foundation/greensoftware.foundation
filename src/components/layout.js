import * as React from "react";
import { Link } from "gatsby";

// Components
import Navbar from "./navbar";
import Footer from "./footer";

// Fonts
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/800.css";
import "@fontsource/nunito-sans/900.css";

// Styles
import "../styles/common.css";
import "../styles/components/layout.scss";

const Layout = ({ children, pageName }) => {
  return (
    <>
      <main className={`page-layout ${pageName}`}>
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
