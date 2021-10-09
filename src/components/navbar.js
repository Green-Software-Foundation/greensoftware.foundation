import * as React from "react";
import { Link } from "gatsby";

// Components
import Button from "./button";

// Styles
import "../styles/components/navbar.scss";

// Assets
import Logo from "../assets/icons/logo.inline.svg";
import HamburgerMenu from "../assets/icons/hamburger-menu.inline.svg";

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
      { title: "Meetups", href: "/standards" },
      { title: "Discourse", href: "/trademark" },
      { title: "Podcast", href: "/innovation" },
      { title: "GitHub", href: "/community" },
    ],
  },
  {
    title: "Articles",
    to: "/articles",
  },
];

const Navbar = () => {
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
              <li
                className={`nav-menu-item ${
                  menuItem.submenu ? "has-submenu" : ""
                }`}
                key={menuItem.title}
              >
                {menuItem.submenu ? (
                  <button>
                    <span>{menuItem.title}</span>
                    <ul className="submenu-wrapper">
                      {menuItem.submenu.map((submenuItem) => (
                        <li key={submenuItem.title}>
                          {submenuItem.to ? (
                            <Link to={submenuItem.to}>{submenuItem.title}</Link>
                          ) : (
                            <a
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {submenuItem.title}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </button>
                ) : (
                  <Link to={menuItem.to}>{menuItem.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-wrapper">
          <Button color="accent2" edgeColor="accent2-dark" to="/join-us">
            JOIN US
          </Button>
        </div>
        <div className="hamburger-menu">
          <button>
            <HamburgerMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
