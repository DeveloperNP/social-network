import { stopSubmit } from 'redux-form'
import { ResultCodeForCaptcha, ResultCodes, authAPI, profileAPI, securityAPI } from '../api/api.ts'
import { ProfileType } from '../types/types'
import { ThunkAction } from '@reduxjs/toolkit'
import { AppStateType, InferActionsTypes } from './redux-store'



let initialState = {
  userID: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  authUserProfile: null as ProfileType | null,
  captchaURL: null as string | null
}

export type InitialStateType = typeof initialState



const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  
  switch (action.type) {
   
    case 'social-network/auth/SET_USER_DATA':
    case 'social-network/auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload
      }
    
    case 'social-network/auth/SET_AUTH_USER_PROFILE':
      return {
        ...state,
        authUserProfile: action.authUserProfile
      }

    default:
      return state
  }
}



type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  setAuthUserData: (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => ({ type: 'social-network/auth/SET_USER_DATA', payload: {userID, email, login, isAuth} } as const),

  getCaptchaURLSuccess: (captchaURL: string) => ({ type: 'social-network/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaURL} } as const),
  
  setAuthUserProfile: (authUserProfile: ProfileType | null) => ({type: 'social-network/auth/SET_AUTH_USER_PROFILE', authUserProfile} as const)
}



type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const checkAuthUser = (): ThunkType => async (dispatch) => {
  let data = await authAPI.checkAuthUser()

  if (data.resultCode === ResultCodes.Success) {
    let { id, email, login } = data.data
    dispatch(actions.setAuthUserData(id, email, login, true))

    let profileData = await profileAPI.getUserProfile(id)
    dispatch(actions.setAuthUserProfile(profileData))
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe, captcha)

  if (data.resultCode === ResultCodes.Success) {
    dispatch(checkAuthUser())
  } else {
    if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaURL())
    }

    let message = data.messages.length > 0 ? data.messages[0] : 'Unknown Error'
    // @ts-ignore
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCaptchaURL = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaURL()
  const captchaURL = response.url
  dispatch(actions.getCaptchaURLSuccess(captchaURL))
}

export const logout = (): ThunkType => async (dispatch) => {
  let data = await authAPI.logout()

  if (data.resultCode === ResultCodes.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false))
    dispatch(actions.setAuthUserProfile(null))
  }
}

export default authReducer