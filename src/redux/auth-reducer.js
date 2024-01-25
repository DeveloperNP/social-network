import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../api/api";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const SET_AUTH_USER_PROFILE = 'social-network/auth/SET_AUTH_USER_PROFILE';

let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  authUserProfile: null
};

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {
   
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    
    case SET_AUTH_USER_PROFILE:
      return {
        ...state,
        authUserProfile: action.authUserProfile
      };

    default:
      return state;
  }
}

export const setAuthUserData = (userID, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userID, email, login, isAuth} });

export const setAuthUserProfile = (authUserProfile) => ({type: SET_AUTH_USER_PROFILE, authUserProfile});



export const checkAuthUser = () => async (dispatch) => {
  let data = await authAPI.checkAuthUser();

  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));

    let profileData = await profileAPI.getUserProfile(id);
    dispatch(setAuthUserProfile(profileData));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe);

  if (data.resultCode === 0) {
    dispatch(checkAuthUser());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : 'Unknown Error';
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    dispatch(setAuthUserProfile(null));
  }
}

export default authReducer;