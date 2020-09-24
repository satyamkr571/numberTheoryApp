import React, { useState } from "react";
import { navBarData } from "./navbarData";
import "./navbar.scss";
function NavBar(props) {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  /* Method to set Active Menus... */
  const onNavMenuClick = (_event, navMenu, disabled) => {
    if (!navMenu.disabled) setActiveMenu(navMenu.navMenuId);
  };

  return (
    <div className="navbar-container">
      <div className="nav-header">{navBarData.navBarHeader}</div>
      <div className={`navbar-toggle ${toggle && "active-toggle"}`}></div>
      <ul className="navbar-menus">
        {navBarData.navBarMenus.length > 0 &&
          navBarData.navBarMenus.map((navMenu) => (
            <li
              className={`nav-menu${
                activeMenu === navMenu.navMenuId ? " active-menu" : ""
              }${navMenu.disabled ? " menu-disabled" : ""}`}
              id={navMenu.navMenuId}
            >
              <a
                href={navMenu.navMenuRoute}
                onClick={(e) => {
                  onNavMenuClick(e, navMenu);
                }}
                disabled={navMenu.disabled}
              >
                {navMenu.navMenuName}{" "}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NavBar;
