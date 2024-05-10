import { BaseResponseType, instance } from './api.ts'


export const followAPI = {
  followUser(userID: number) {
    return instance.post<BaseResponseType>(`follow/${userID}`)
      .then(response => response.data)
  },

  unfollowUser(userID: number) {
    return instance.delete<BaseResponseType>(`follow/${userID}`)
      .then(response => response.data)
  }
}