import React from "react";
import "./header.css";
import { MENU } from "../App";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-menu">
        {MENU.map((menuItem) => (
          <NavLink to={menuItem.path} className="header-menu__item">
            {menuItem.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
