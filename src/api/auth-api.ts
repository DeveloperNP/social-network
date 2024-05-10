import { ResultCodes, ResultCodeForCaptcha, instance, BaseResponseType } from './api.ts'


type CheckAuthUserResponseDataType = {
  id: number
  login: string
  email: string
}

type LoginResponseDataType = { userId: number }
type LoginResponseResultCodesType = ResultCodes | ResultCodeForCaptcha


export const authAPI = {
  checkAuthUser() {
    return instance.get<BaseResponseType<CheckAuthUserResponseDataType>>('auth/me')
      .then(response => response.data)
  },

  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<BaseResponseType<LoginResponseDataType, LoginResponseResultCodesType>>('auth/login', {
      email, password, rememberMe, captcha
    }).then(response => response.data)
  },

  logout() {
    return instance.delete<BaseResponseType>('auth/login')
      .then(response => response.data)
  }
}
