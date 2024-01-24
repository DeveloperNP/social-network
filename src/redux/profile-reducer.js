import { profileAPI } from "../api/api";

const ADD_POST = 'social-network/profile/ADD_POST';
const DELETE_POST = 'social-network/profile/DELETE_POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';


let initialState = {
  posts: [
    { id: 1, message: 'Forza Milan!!!', likesCount: 1899 },
    { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 508 },
    { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 287 },
    { id: 4, message: 'The weather is fine today', likesCount: 35 },
    { id: 5, message: 'How are you?', likesCount: 58 },
    { id: 6, message: 'Hello, World! This is my first post ^.^', likesCount: 104 }
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
      
    case ADD_POST: 
      let newPost = {
        id: 7,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };

    case DELETE_POST: 
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postID)
      };
    
      case SET_USER_PROFILE: 
        return {
          ...state,
          profile: action.profile
        };
      
      case SET_USER_STATUS: 
        return {
          ...state,
          status: action.status
        };
    
    default:
      return state;
  }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const deletePost = (postID) => ({ type: DELETE_POST, postID });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });



export const getUserProfile = (userID) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userID)
      .then(data => {        
        dispatch(setUserProfile(data))
      });
  }
}

export const getUserStatus = (userID) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userID)
      .then(status => {        
        dispatch(setUserStatus(status))
      });
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(setUserStatus(status))
        }
      });
  }
}

export default profileReducer;