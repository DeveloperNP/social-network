import axios from 'axios'


export const instance = axios.create({
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


// Generic For Server Response
export type BaseResponseType<D = {}, RC = ResultCodes> = {
  data: D
  messages: Array<string>
  fieldsErrors: Array<any>
  resultCode: RC
}