import React from "react";
import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  const avatar = props.avatar;

  return (
    <div className={s.dialogItemWrapper}>
      <div>
        <img className={s.avatar} src={avatar} alt="AVA" />
      </div>
      <div className={s.item}>
        <NavLink to={path} className={navData => navData.isActive ? s.activeDialog : s.dialog}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
}

export default DialogItem;