import { profileAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE-POST';


let initialState = {
  posts: [
    { id: 1, message: 'Forza Milan!!!', likesCount: 1899 },
    { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 508 },
    { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 287 },
    { id: 4, message: 'The weather is fine today', likesCount: 35 },
    { id: 5, message: 'How are you?', likesCount: 58 },
    { id: 6, message: 'Hello, World! This is my first post ^.^', likesCount: 104 }
  ],
  newPostText: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText
      };
      
    case ADD_POST: 
      let newPost = {
        id: 7,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    
      case SET_USER_PROFILE: 
        return {
          ...state,
          profile: action.profile
        };
    

    default:
      return state;
  }
}

export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });

export const addPost = () => ({ type: ADD_POST });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });



export const getUserProfile = (userID) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userID)
      .then(data => {        
        dispatch(setUserProfile(data))
      });
  }
}

export default profileReducer;