import React from "react";
import s from './Dialogs.module.css'
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

const MessageItem = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  );
}

const Dialogs = () => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <DialogItem id="1" name="Nickolai" />
        <DialogItem id="2" name="Andrey" />
        <DialogItem id="3" name="Kristina" />
        <DialogItem id="4" name="Lyonya" />
        <DialogItem id="5" name="Irina" />
        <DialogItem id="6" name="Tatiana" />
        <DialogItem id="7" name="Julia" />
        <DialogItem id="8" name="Diana" />
      </div>
      <div className={s.messages}>
        <MessageItem message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste maiores error? Suscipit quo, maiores dolores quidem odit ducimus nulla voluptas atque." />
        <MessageItem message="Hi, how are you?" />
        <MessageItem message="I'm bored :c" />
        <MessageItem message="The weather is cloudy today" />
        <MessageItem message="Let's play together!!!" />
      </div>
    </div>
  );
}

export default Dialogs;