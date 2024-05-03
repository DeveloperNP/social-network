import { stopSubmit } from 'redux-form'
import { ResultCodeForCaptcha, ResultCodes, authAPI, profileAPI, securityAPI } from '../api/api.ts'
import { ProfileType } from '../types/types'
import { ThunkAction } from '@reduxjs/toolkit'
import { AppStateType } from './redux-store'

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'
const SET_AUTH_USER_PROFILE = 'social-network/auth/SET_AUTH_USER_PROFILE'
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS'



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
   
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    
    case SET_AUTH_USER_PROFILE:
      return {
        ...state,
        authUserProfile: action.authUserProfile
      }

    default:
      return state
  }
}



type ActionsTypes = SetAuthUserDataActionType | GetCaptchaURLSuccessActionType | SetAuthUserProfileActionType

type SetAuthUserDataActionPayloadType = {
  userID: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({ type: SET_USER_DATA, payload: {userID, email, login, isAuth} })


type GetCaptchaURLSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaURL: string }
}
export const getCaptchaURLSuccess = (captchaURL: string): GetCaptchaURLSuccessActionType => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaURL} })


type SetAuthUserProfileActionType = {
  type: typeof SET_AUTH_USER_PROFILE
  authUserProfile: ProfileType | null
}
export const setAuthUserProfile = (authUserProfile: ProfileType | null): SetAuthUserProfileActionType => ({type: SET_AUTH_USER_PROFILE, authUserProfile})



type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const checkAuthUser = (): ThunkType => async (dispatch) => {
  let data = await authAPI.checkAuthUser()

  if (data.resultCode === ResultCodes.Success) {
    let { id, email, login } = data.data
    dispatch(setAuthUserData(id, email, login, true))

    let profileData = await profileAPI.getUserProfile(id)
    dispatch(setAuthUserProfile(profileData))
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
  dispatch(getCaptchaURLSuccess(captchaURL))
}

export const logout = (): ThunkType => async (dispatch) => {
  let data = await authAPI.logout()

  if (data.resultCode === ResultCodes.Success) {
    dispatch(setAuthUserData(null, null, null, false))
    dispatch(setAuthUserProfile(null))
  }
}

export default authReducer