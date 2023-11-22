import { authAPI, profileAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';

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
        ...action.data,
        isAuth: true
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

export const setAuthUserData = (userID, email, login) => ({ type: SET_USER_DATA, data: {userID, email, login} });

export const setAuthUserProfile = (authUserProfile) => ({type: SET_AUTH_USER_PROFILE, authUserProfile});



export const checkAuthUser = () => {
  return (dispatch) => {
    authAPI.checkAuthUser()
      .then(data => {
        if(data.resultCode === 0) {          
          let {id, email, login} = data.data;
          dispatch(setAuthUserData(id, email, login));
        
          profileAPI.getUserProfile(id)
            .then(data => {                            
              dispatch(setAuthUserProfile(data));
            });
        }
      });
  }
}

export default authReducer;