import React from "react";
import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={s.item}>
      <NavLink to={path} className={navData => navData.isActive ? s.activeDialog : s.dialog}>
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogItem;