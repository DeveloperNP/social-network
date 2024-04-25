import { checkAuthUser } from "./auth-reducer.ts";

const INIT_SUCCESS = 'social-network/app/INIT_SUCCESS';

export type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  
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

type InitSuccessActionType = {
  type: typeof INIT_SUCCESS
}
const initSuccess = (): InitSuccessActionType => ({ type: INIT_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(checkAuthUser());

  promise.then( () => {
    dispatch(initSuccess());
  });
}


export default appReducer;