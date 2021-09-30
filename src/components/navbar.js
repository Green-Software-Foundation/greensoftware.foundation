import * as React from "react";
import { Link } from "gatsby";

// Components
import Button from "./button";

// Styles
import "../styles/components/navbar.scss";

// Assets
import Logo from "../assets/icons/logo.inline.svg";
import CaretDown from "../assets/icons/caret-down.inline.svg";

// Menu Data
const menuData = [
  {
    title: "About",
    submenu: [
      { title: "Manifesto", to: "/manifesto" },
      { title: "Team", to: "/team" },
      { title: "Press", to: "/press" },
      { title: "Media Kit", to: "/media-kit" },
      { title: "Trademark Policy", to: "/trademark-policy" },
      { title: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Working Groups",
    submenu: [
      { title: "Standards", to: "/standards" },
      { title: "Trademark", to: "/trademark" },
      { title: "Innovation", to: "/innovation" },
      { title: "Community", to: "/community" },
    ],
  },
  {
    title: "Projects",
    to: "/projects",
  },
  {
    title: "Resources",
    submenu: [
      { title: "Meetups", href: "/standards" },
      { title: "Discourse", to: "/trademark" },
      { title: "Podcast", to: "/innovation" },
      { title: "GitHub", to: "/community" },
    ],
  },
  {
    title: "Articles",
    to: "/articles",
  },
];

const Navbar = ({ currentPage }) => {
  return (
    <header>
      <nav className="main-navbar flex-center-between">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          <ul className="nav-menu flex-center-between">
            {menuData.map((menuItem) => (
              <li className="nav-menu-item" key={menuItem.title}>
                {menuItem.to ? (
                  <Link to={menuItem.to}>{menuItem.title}</Link>
                ) : (
                  <button>
                    <span>{menuItem.title}</span>
                    <span className="caret-icon">
                      <CaretDown />
                    </span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-wrapper">
          <Link to="/join-us">
            <Button color="accent2" edgeColor="accent2-dark">
              JOIN US
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
