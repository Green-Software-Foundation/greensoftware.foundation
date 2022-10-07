import * as React from "react";

// Components
import Seo from "./seo";
import Navbar from "./navbar";
import Footer from "./footer";
import Search from "./search";
import Button from "./button";

// Fonts
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/800.css";
import "@fontsource/nunito-sans/900.css";

// Styles
import "../styles/common.css";

// Assets
import LeftBanner from "../assets/carbon-hack/banner-left.svg";
import CenterBanner from "../assets/carbon-hack/banner-center.inline.svg";
import RightBanner from "../assets/carbon-hack/banner-right.svg";
const Banner = ({ children }) => {
  return (
    <div className="banner">
      <div className="left">
        <img src={LeftBanner} alt="" />
      </div>
      <div className="center">
        <div>
          <span>13 Oct - 10 Nov</span>
        </div>
        <div>
          <CenterBanner />
        </div>
        <div>
          <Button
            color="accent1"
            edgeColor="accent1-dark"
            textColor="primary-dark"
            href="https://grnsft.org/hack22"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={RightBanner} alt="" />
      </div>
    </div>
  );
};

const Layout = ({ children, pageName, seo, className }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const pageContentEl = React.useRef(null);

  return (
    <>
      <Seo title={seo?.title} meta={seo?.meta} />
      <div ref={pageContentEl}>
        <Banner />
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
