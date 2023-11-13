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

export default authReducer;