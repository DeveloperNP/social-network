import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: 'Nickolai' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Kristina' },
    { id: 4, name: 'Lyonya' },
    { id: 5, name: 'Irina' },
    { id: 6, name: 'Tania' },
    { id: 7, name: 'Julia' },
    { id: 8, name: 'Diana' }
  ];

  let messages = [
    { id: 1, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste maiores error? Suscipit quo, maiores dolores quidem odit ducimus nulla voluptas atque.' },
    { id: 2, message: 'Hi, how are you?' },
    { id: 3, message: 'I\'m bored :c' },
    { id: 4, message: 'The weather is cloudy today' },
    { id: 5, message: 'Let\'s play together!!!' }
  ];

  let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = messages.map(m => <MessageItem message={m.message} />);

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;