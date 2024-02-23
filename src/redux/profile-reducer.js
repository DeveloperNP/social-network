import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'social-network/profile/ADD_POST';
const DELETE_POST = 'social-network/profile/DELETE_POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS';


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

      case SAVE_PHOTO_SUCCESS: 
        return {
          ...state,
          profile: {...state.profile, photos: action.photos}
        };
    
    default:
      return state;
  }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const deletePost = (postID) => ({ type: DELETE_POST, postID });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });



export const getUserProfile = (userID) => {
  return async (dispatch) => {
    let data = await profileAPI.getUserProfile(userID);
    dispatch(setUserProfile(data))
  }
}

export const getUserStatus = (userID) => {
  return async (dispatch) => {
    let status = await profileAPI.getUserStatus(userID);
    dispatch(setUserStatus(status))   
  }
}

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);

    if (response.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  }
}

export const savePhoto = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos))      
    }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userID = getState().auth.userID;
    let response = await profileAPI.saveProfile(profile);

    if (response.resultCode === 0) {
      dispatch(getUserProfile(userID))
    } else {
      dispatch(stopSubmit('edit-profile', {_error: response.messages[0]}))
      return Promise.reject(response.messages[0])
    }
  }
}

export default profileReducer;