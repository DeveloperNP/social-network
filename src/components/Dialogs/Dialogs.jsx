import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <div className={s.item}>
          <NavLink to="/dialogs/1" className={navData => navData.isActive ? s.activeDialog : s.dialog}>
            Nickolai
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/2" className={navData => navData.isActive ? s.activeDialog : s.dialog}>
            Andrey
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/3" className={navData => navData.isActive ? s.activeDialog : s.dialog}>
            Kristina
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/4" className={navData => navData.isActive ? s.activeDialog : s.dialog}>
            Lyonya
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/5" className={navData => navData.isActive ? s.activeDialog : s.dialog}>
            Irina
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/6" className={navData => navData.isActive ? s.activeDialog : s.dialog}>
            Tatiana
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/7" className={navData => navData.isActive ? s.activeDialog : s.dialog}>
            Julia
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/8" className={navData => navData.isActive ? s.activeDialog : s.dialog}>
            Diana
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi, how are you?</div>
        <div className={s.message}>I'm bored :c</div>
        <div className={s.message}>The weather is cloudy today</div>
        <div className={s.message}>Let's play together!!!</div>
      </div>
    </div>
  );
}

export default Dialogs;