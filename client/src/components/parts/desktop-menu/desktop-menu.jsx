import "./desktop-menu.css";
import React from "react";
import { NavLink } from "react-router-dom";

function DesktopMenu({ linksList }) {
  let activeStyle = {
    textDecoration: "underline",
    color: "#3cb451",
    fontWeight: "bold",
  };
  let nonActiveStyle = {
    textDecoration: "none",
    color: "var(--color-text)",
    fontWeight: "normal",
    cursor: "pointer",
  };
  return (
    <>
      <nav>
        <ul>
          {linksList.map((linkItem) => {
            return (
              <li key={linkItem.linkTitle}>
                <NavLink
                  to={linkItem.path}
                  style={({ isActive }) =>
                    isActive ? activeStyle : nonActiveStyle
                  }
                >
                  {linkItem.linkTitle}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>{" "}
    </>
  );
}

export default DesktopMenu;
