import React from "react";
import { addMessage, updateNewMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    pageData: state.dialogsPage
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addMessage: () => {
//       dispatch(addMessageActionCreator());
//     },
//     updateNewMessageText: (text) => {
//       dispatch(updateNewMessageTextActionCreator(text));
//     }
//   }
// }

const DialogsContainer = connect(mapStateToProps, { addMessage, updateNewMessageText })(Dialogs);

export default DialogsContainer;