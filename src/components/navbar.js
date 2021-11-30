import * as React from "react";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

// Components
import Button from "./button";

// Styles
import "../styles/components/navbar.scss";

// Assets
import Logo from "../assets/icons/logo.inline.svg";
import HamburgerMenuBlob from "../assets/icons/hamburger-menu-blob.inline.svg";

// Menu Data
const menuData = [
  {
    title: "About",
    submenu: [
      { title: "Manifesto", to: "/manifesto" },
      { title: "Team", to: "/team" },
      {
        title: "What is Green software?",
        to: "/articles/what-is-green-software",
      },
      {
        title: "How we work?",
        to: "/articles/welcome-to-the-green-software-foundation",
      },
      { title: "Press", to: "/press" },
      {
        title: "Media Kit",
        href: "https://drive.google.com/drive/folders/1mC2YiR9cRfTe5h7p_-aCndTB0v0biWVq?usp=sharing",
      },
      { title: "Trademark Policy", to: "/policy/trademark" },
      { title: "Code Of Conduct", to: "/code-of-conduct" },
    ],
  },
  {
    title: "Working Groups",
    submenu: [
      { title: "Standards", to: "/working-groups/standards" },
      { title: "Trademark", to: "/working-groups/trademark" },
      { title: "Innovation", to: "/working-groups/innovation" },
      { title: "Community", to: "/working-groups/community" },
    ],
  },
  {
    title: "Projects",
    to: "/projects",
  },
  {
    title: "Resources",
    submenu: [
      { title: "GitHub", href: "https://github.com/Green-Software-Foundation" },
      {
        title: "Awesome Green Software",
        href: "https://github.com/Green-Software-Foundation/awesome-green-software",
      },
      {
        title: "Principles of Green Software Engineering",
        href: "https://principles.green",
      },
    ],
  },
  {
    title: "Articles",
    to: "/articles",
  },
];

const MenuItems = ({ className, responsive }) => {
  const [selectedMenu, setSelectedMenu] = React.useState("");
  return (
    <ul
      className={`${responsive ? "responsive-nav-menu" : "nav-menu"} ${
        className ? className : ""
      }`}
    >
      {menuData.map((menuItem) => (
        <li
          className={`nav-menu-item ${menuItem.submenu ? "has-submenu" : ""}`}
          key={menuItem.title}
        >
          {menuItem.submenu ? (
            <>
              <button
                className={`${
                  selectedMenu === menuItem.title ? "selected" : ""
                }`}
                onClick={() =>
                  setSelectedMenu(
                    selectedMenu === menuItem.title ? "" : menuItem.title
                  )
                }
              >
                <span>{menuItem.title}</span>
              </button>
              <ul
                className={`submenu-wrapper ${
                  selectedMenu === menuItem.title ? "selected" : ""
                }`}
              >
                {menuItem.submenu.map((submenuItem) => (
                  <li key={submenuItem.title}>
                    {submenuItem.to ? (
                      <Link to={submenuItem.to}>{submenuItem.title}</Link>
                    ) : (
                      <a
                        href={submenuItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {submenuItem.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link to={menuItem.to}>{menuItem.title}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};
const JoinCTA = () => (
  <div className="cta-wrapper">
    <Button color="primary" edgeColor="primary-dark" to="/join-us">
      JOIN US
    </Button>
  </div>
);

const ResponsiveMenu = () => {
  const menuEl = React.useRef(null);
  React.useEffect(() => {
    disableBodyScroll(menuEl.current);
    return () => clearAllBodyScrollLocks();
  }, []);

  return (
    <motion.div
      ref={menuEl}
      key="responsive-menu"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="responsive-menu-wrapper"
    >
      <MenuItems responsive />
      <JoinCTA />
    </motion.div>
  );
};
const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  return (
    <header>
      <nav className="main-navbar flex-center-between">
        <div>
          <Link
            style={{ display: "block" }}
            aria-label="GSF Logo"
            aria-current="page"
            to="/"
          >
            <Logo />
          </Link>
        </div>
        <div>
          <MenuItems className="flex-center-between" />
        </div>
        <JoinCTA />
        <div className="hamburger-menu">
          <button
            aria-label="menu"
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            <HamburgerMenuBlob />
            <div
              className={`hamburger-menu-lines ${menuIsOpen ? "is-open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <AnimatePresence>{menuIsOpen && <ResponsiveMenu />}</AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
