import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = (props) => {
  return (    
      <form onSubmit={props.handleSubmit} className={s.newMessage}>
        <Field component='textarea' name='newMessageText' placeholder="Enter your message" />        
        <button>Send message</button>
      </form>
  );
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
  let dialogsElements = props.pageData.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} />);
  let messagesElements = props.pageData.messages.map(m => <MessageItem key={m.id} message={m.message} />);

  let addNewMessage = (formData) => {
    props.addMessage(formData.newMessageText);
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
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

export default Dialogs;