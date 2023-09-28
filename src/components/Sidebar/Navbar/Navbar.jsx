import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className={s.item}>
        <NavLink to="/profile" className={navData => navData.isActive ? s.activeLink : s.link}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? s.activeLink : s.link}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={navData => navData.isActive ? s.activeLink : s.link}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={navData => navData.isActive ? s.activeLink : s.link}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={navData => navData.isActive ? s.activeLink : s.link}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={navData => navData.isActive ? s.activeLink : s.link}>
          Find Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;