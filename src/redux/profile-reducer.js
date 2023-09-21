const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  posts: [
    { id: 1, message: 'Forza Milan!!!', likesCount: 1899 },
    { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 508 },
    { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 287 },
    { id: 4, message: 'The weather is fine today', likesCount: 35 },
    { id: 5, message: 'How are you?', likesCount: 58 },
    { id: 6, message: 'Hello, World! This is my first post ^.^', likesCount: 104 }
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      
      stateCopy.newPostText = action.newPostText;
      return stateCopy;
    }
      
    case ADD_POST: {
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      
      let newPost = {
        id: 7,
        message: state.newPostText,
        likesCount: 0
      };
      
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }

    default:
      return state;
  }
}

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });

export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;