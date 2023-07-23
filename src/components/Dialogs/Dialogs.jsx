import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  let dialogsElements = props.pageData.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar} />);
  let messagesElements = props.pageData.messages.map(m => <MessageItem message={m.message} />);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    // props.addMessage();
    props.dispatch({ type: 'ADD-MESSAGE' });
  }

  let newMessageChanged = () => {
    let text = newMessageElement.current.value;
    // props.updateNewMessageText(text);
    let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text };
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
          <textarea ref={newMessageElement} onChange={newMessageChanged} value={props.pageData.newMessageText} />
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;