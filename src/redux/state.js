let store = {
  _callSubscriber() { },
  _state: {
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
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
    else if (action.type === 'ADD-POST') {
      let newPost = {
        id: 7,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
  }
}

window.store = store;

export default store;