import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

// const DialogsContainer = (props) => {
//   let state = props.store.getState();

//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   }

//   let newMessageChanged = (text) => {
//     let action = updateNewMessageTextActionCreator(text);
//     props.store.dispatch(action);
//   }

//   return (<Dialogs
//             pageData={state.dialogsPage}
//             addMessage={addMessage}
//             updateNewMessageText={newMessageChanged}
//           />);
// }

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>      
      {
        (store) => {

          let state = store.getState();

          let addMessage = () => {
            store.dispatch(addMessageActionCreator());
          }

          let newMessageChanged = (text) => {
            let action = updateNewMessageTextActionCreator(text);
            store.dispatch(action);
          }

          return <Dialogs
            pageData={state.dialogsPage}
            addMessage={addMessage}
            updateNewMessageText={newMessageChanged} />
        }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;