import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? `${classes.active}` : "")}
        >
          Profile
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? `${classes.active}` : "")}
        >
          Message
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink
          to="/News"
          className={({ isActive }) => (isActive ? `${classes.active}` : "")}
        >
          News
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink
          to="/Music"
          className={({ isActive }) => (isActive ? `${classes.active}` : "")}
        >
          Music
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink
          to="/Settings"
          className={({ isActive }) => (isActive ? `${classes.active}` : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
