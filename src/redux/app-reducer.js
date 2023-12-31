import { checkAuthUser } from "./auth-reducer";

const INIT_SUCCESS = 'INIT_SUCCESS';

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  
  switch (action.type) {
   
    case INIT_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    
    default:
      return state;
  }
}

const initSuccess = () => ({ type: INIT_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(checkAuthUser());

  promise.then( () => {
    dispatch(initSuccess());
  });
}


export default appReducer;