import * as React from "react";

// Components
import SEO from "./seo";
import Navbar from "./navbar";
import Footer from "./footer";

// Fonts
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/800.css";
import "@fontsource/nunito-sans/900.css";

// Styles
import "../styles/common.css";
import "../styles/components/layout.scss";

const Layout = ({ children, pageName, seo }) => {
  return (
    <>
      <SEO title={seo?.title} meta={seo?.meta} />
      <main className={`${pageName}`}>
        <Navbar />
        <div className="page-layout">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
