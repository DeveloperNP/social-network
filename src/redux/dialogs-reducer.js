const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {

  switch (action.type) {
    
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
  
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;

    default:
      return state;
  }
}

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;