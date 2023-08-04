const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Nickolai', avatar: "./images/Nickolai_avatar.jpg" },
    { id: 2, name: 'Andrey', avatar: "./images/Andrey_avatar.jpg" },
    { id: 3, name: 'Kristina', avatar: "./images/Kristina_avatar.jpg" },
    { id: 4, name: 'Lyonya', avatar: "./images/Lyonya_avatar.jpg" },
    { id: 5, name: 'Irina', avatar: "./images/Irina_avatar.jpg" },
    { id: 6, name: 'Tania', avatar: "./images/Tania_avatar.jpg" },
    { id: 7, name: 'Julia', avatar: "./images/Julia_avatar.jpg" },
    { id: 8, name: 'Diana', avatar: "./images/Diana_avatar.jpg" }
  ],
  messages: [
    { id: 1, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste maiores error? Suscipit quo, maiores dolores quidem odit ducimus nulla voluptas atque.' },
    { id: 2, message: 'Hi, how are you?' },
    { id: 3, message: 'I\'m bored :c' },
    { id: 4, message: 'The weather is cloudy today' },
    { id: 5, message: 'Let\'s play together!!!' },
    { id: 6, message: 'Good luck to everyone :)' }
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

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