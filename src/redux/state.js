let rerenderEntireTree = () => {}

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Forza Milan!!!', likesCount: 1899 },
      { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 508 },
      { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 287 },
      { id: 4, message: 'The weather is fine today', likesCount: 35 },
      { id: 5, message: 'How are you?', likesCount: 58 },
      { id: 6, message: 'Hello, World! This is my first post ^.^', likesCount: 104 }
    ],
    newPostText: ''
  },
  dialogsPage: {
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
  },
  sidebar: {
    friends: [
      { id: 1, name: 'Andrey', avatar: "./images/Andrey_avatar.jpg" },
      { id: 2, name: 'Julia', avatar: "./images/Julia_avatar.jpg" },
      { id: 3, name: 'Lyonya', avatar: "./images/Lyonya_avatar.jpg" }
    ]
  }
}

window.state = state;

export const updateNewPostText = (newPostText) => {
  state.profilePage.newPostText = newPostText;
  rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessageText) => {
  state.dialogsPage.newMessageText = newMessageText;
  rerenderEntireTree(state);
}

export const addPost = () => {
  let newPost = {
    id: 7,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;