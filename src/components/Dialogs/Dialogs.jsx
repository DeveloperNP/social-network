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
  let dialogsData = [
    {id: 1, name: 'Nickolai'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Kristina'},
    {id: 4, name: 'Lyonya'},
    {id: 5, name: 'Irina'},
    {id: 6, name: 'Tania'},
    {id: 7, name: 'Julia'},
    {id: 8, name: 'Diana'}
  ];

  let messagesData = [
    {id: 1, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste maiores error? Suscipit quo, maiores dolores quidem odit ducimus nulla voluptas atque.'},
    {id: 2, message: 'Hi, how are you?'},
    {id: 3, message: 'I\'m bored :c'},
    {id: 4, message: 'The weather is cloudy today'},
    {id: 5, message: 'Let\'s play together!!!'}
  ];
  
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
        <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
        <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
        <DialogItem id={dialogsData[6].id} name={dialogsData[6].name} />
        <DialogItem id={dialogsData[7].id} name={dialogsData[7].name} />
      </div>
      <div className={s.messages}>
        <MessageItem message={messagesData[0].message} />
        <MessageItem message={messagesData[1].message} />
        <MessageItem message={messagesData[2].message} />
        <MessageItem message={messagesData[3].message} />
        <MessageItem message={messagesData[4].message} />
      </div>
    </div>
  );
}

export default Dialogs;