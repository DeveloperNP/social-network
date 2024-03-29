import { reset } from "redux-form";

const ADD_MESSAGE = 'social-network/dialogs/ADD_MESSAGE';

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
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: action.newMessageText
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:
      return state;
  }
}

export const addMessage = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export const addMessageClearForm = (newMessageText) => {
  return (dispatch) => {
    dispatch(addMessage(newMessageText));
    dispatch(reset('dialogAddMessageForm'));
  }
}

export default dialogsReducer;