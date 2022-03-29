import "./Sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "#3cb451",
    fontWeight: "bold",
  };
  let nonActiveStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "normal",
    cursor: "pointer"
  };
  const linksList = [
    { path: "/", linkTitle: "Home" },
    { path: "/slides", linkTitle: "מצגות" },
    { path: "/dev101", linkTitle: "DEV 101" },
    { path: "/html", linkTitle: "HTML5" },
    { path: "/css", linkTitle: "CSS 3" },
    { path: "/js101", linkTitle: "JAVASCRIPT 101" },
    { path: "/jsES6", linkTitle: "JAVASCRIPT ADVANCED" },
    { path: "/ts", linkTitle: "TYPESCRIPT" },
    { path: "/react", linkTitle: "REACT" },
    { path: "/nodejs", linkTitle: "NODEJS" },
    { path: "/c#101", linkTitle: "C# 101" },
    { path: "/c#dotnet", linkTitle: ".NET" },
    { path: "/links", linkTitle: "LINKS" },
  ];
  return (
    <div className="side-bar">
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
      </nav>
    </div>
  );
};
export default Sidebar;
