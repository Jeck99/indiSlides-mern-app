import "./mobile-menu.css";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";

const ITEM_HEIGHT = 48;

export default function MobileMenu({ linksList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="Menu"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color={window.matchMedia("(prefers-color-scheme: dark)").matches ? "secondary" : "primary"}
        size="large"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {linksList.map((linkItem) => {
          return (
            <MenuItem
              key={linkItem.linkTitle}
              selected={linkItem.path === "/"}
              onClick={handleClose}
            >
              <NavLink to={linkItem.path}>{linkItem.linkTitle}</NavLink>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
