import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let newMessageChanged = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (<Dialogs
            pageData={state.dialogsPage}
            addMessage={addMessage}
            updateNewMessageText={newMessageChanged}
          />);
}

export default DialogsContainer;