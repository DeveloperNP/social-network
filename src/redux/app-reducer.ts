import { ThunkAction } from '@reduxjs/toolkit'
import { checkAuthUser } from './auth-reducer.ts'
import { AppStateType, InferActionsTypes } from './redux-store.ts'



let initialState = {
  initialized: false
}

export type InitialStateType = typeof initialState



const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  
  switch (action.type) {
   
    case 'social-network/app/INIT_SUCCESS':
      return {
        ...state,
        initialized: true
      }
    
    default:
      return state
  }
}



type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  initSuccess: () => ({ type: 'social-network/app/INIT_SUCCESS' } as const)
}



export const initializeApp = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => (dispatch) => {
  let promise = dispatch(checkAuthUser())

  promise.then( () => {
    dispatch(actions.initSuccess())
  })
}


export default appReducer