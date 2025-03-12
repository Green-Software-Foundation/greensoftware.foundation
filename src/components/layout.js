import * as React from "react";

// Components
import Seo from "./seo";
import Navbar from "./navbar";
import Footer from "./footer";
import Search from "./search";
import Banner from "./banner";

// Fonts
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/800.css";
import "@fontsource/nunito-sans/900.css";

// Styles
import "../styles/common.css";


const Layout = ({ children, pageName, seo, className }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const pageContentEl = React.useRef(null);

  return (
    <>
      <Seo title={seo?.title} meta={seo?.meta} />
      <div ref={pageContentEl}>
        {/* <Banner /> */}
        <main className={`${pageName}`}>
          <Navbar openSearch={() => setIsSearchOpen(true)} />
          <div className={`page-layout ${className}`}>{children}</div>
        </main>
        <Footer />
      </div>
      {isSearchOpen && (
        <Search
          pageContentEl={pageContentEl}
          close={() => setIsSearchOpen(false)}
        />
      )}
    </>
  );
};

export default Layout;
