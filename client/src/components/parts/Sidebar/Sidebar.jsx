import "./Sidebar.css";
import React from "react";
// import { NavLink } from "react-router-dom";
import MobileMenu from "../mobile-menu/mobile-menu";
import DesktopMenu from "../desktop-menu/desktop-menu";
const Sidebar = () => {
  const linksList = [
    { path: "/", linkTitle: "Home" },
    { path: "/slides", linkTitle: "כל המצגות" },
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
      {window.screen.width < 768 ? (
        <MobileMenu linksList={linksList} />
      ) : (
        <DesktopMenu linksList={linksList} />
      )}
    </div>
  );
};
export default Sidebar;
