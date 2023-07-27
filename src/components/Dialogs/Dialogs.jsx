import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.pageData.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar} />);
  let messagesElements = props.pageData.messages.map(m => <MessageItem message={m.message} />);

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let newMessageChanged = (e) => {
    let text = e.target.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {dialogsElements}
      </div>
      <div className={s.messagesBlock}>
        <div className={s.messages}>
          {messagesElements}
        </div>
        <div className={s.newMessage}>
          <textarea
            onChange={newMessageChanged}
            value={props.pageData.newMessageText}
            placeholder="Enter your message"
          />
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;