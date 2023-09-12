import React from "react";
import s from './Sidebar.module.css'
import Navbar from "./Navbar/Navbar";
import Friendsbar from "./Friendsbar/Friendsbar";

const Sidebar = (props) => {
  return (
    <div className={s.sidebarWrapper}>
      <Navbar />
      <Friendsbar friends={props.pageData.friends}/>
    </div>
  );
}

export default Sidebar;