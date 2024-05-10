import { instance } from './api.ts'


type GetCaptchaURLResponseType = {
  url: string
}


export const securityAPI = {
  getCaptchaURL() {
    return instance.get<GetCaptchaURLResponseType>(`security/get-captcha-url`)
      .then(response => response.data)
  }
}
