import { getCaptchaURL } from './../redux/auth-reducer';
import axios from 'axios'
import { PhotosType, ProfileType, UserType } from '../types/types'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "7b4b632c-cffe-4973-8ac6-d6f06e718410"
  }
})



// Result Codes From Server Responses
export enum ResultCodes {
  Success = 0,
  Error = 1
}
export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}



// Frequently Repeated Server Response
type UsualResponseType = {
  data: {}
  messages: Array<string>
  fieldsErrors: Array<any>
  resultCode: ResultCodes
}



type GetUsersResponseType = {
  error: any
  items: Array<UserType>
  totalCount: number
}

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  }
}



type CheckAuthUserResponseType = {
  data: {
    id: number
    login: string
    email: string
  }
  messages: Array<string>
  fieldsErrors: Array<any>
  resultCode: ResultCodes
}

type LoginResponseType = {
  data: { userId: number }
  messages: Array<string>
  fieldsErrors: Array<any>
  resultCode: ResultCodes | ResultCodeForCaptcha
}

type LogoutResponseType = UsualResponseType

export const authAPI = {
  checkAuthUser() {
    return instance.get<CheckAuthUserResponseType>('auth/me')
      .then(response => response.data)
  },

  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<LoginResponseType>('auth/login', {
      email, password, rememberMe, captcha
    }).then(response => response.data)
  },

  logout() {
    return instance.delete<LogoutResponseType>('auth/login')
      .then(response => response.data)
  }
}



type UpdateUserStatusResponseType = UsualResponseType

type SavePhotoResponseType = {
  data: { photos: PhotosType }
  messages: Array<string>
  fieldsErrors: Array<any>
  resultCode: ResultCodes
}

type SaveProfileResponseType = UsualResponseType

export const profileAPI = {
  getUserProfile(userID: number | null) {
    return instance.get<ProfileType>(`profile/${userID}`)
      .then(response => response.data)
  },

  getUserStatus(userID: number) {
    return instance.get<string>(`profile/status/${userID}`)
      .then(response => response.data)
  },

  updateUserStatus(status: string) {
    return instance.put<UpdateUserStatusResponseType>('profile/status', {
      status: status
    }).then(response => response.data)
  },

  savePhoto(photoFile: any) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put<SavePhotoResponseType>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data)
  },
  
  saveProfile(profile: ProfileType) {
    return instance.put<SaveProfileResponseType>('profile', profile)
      .then(response => response.data)
  }
}



export type FollowUnfollowResponseType = UsualResponseType

export const followAPI = {
  followUser(userID: number) {
    return instance.post<FollowUnfollowResponseType>(`follow/${userID}`)
      .then(response => response.data)
  },

  unfollowUser(userID: number) {
    return instance.delete<FollowUnfollowResponseType>(`follow/${userID}`)
      .then(response => response.data)
  }
}



type GetCaptchaURLResponseType = {
  url: string
}

export const securityAPI = {
  getCaptchaURL() {
    return instance.get<GetCaptchaURLResponseType>(`security/get-captcha-url`)
      .then(response => response.data)
  }
}