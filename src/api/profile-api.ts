import { PhotosType, ProfileType } from '../types/types'
import { instance, BaseResponseType } from './api.ts'


type SavePhotoResponseDataType = { photos: PhotosType }


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
    return instance.put<BaseResponseType>('profile/status', {
      status: status
    }).then(response => response.data)
  },

  savePhoto(photoFile: File) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put<BaseResponseType<SavePhotoResponseDataType>>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data)
  },

  saveProfile(profile: ProfileType) {
    return instance.put<BaseResponseType>('profile', profile)
      .then(response => response.data)
  }
}
