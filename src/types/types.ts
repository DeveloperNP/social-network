export type PhotosType = {
  small: string | null
  large: string | null
}

export type ContactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type ProfileType = {
  aboutMe: string
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: PhotosType
}

export type DialogType = {
  id: number
  name: string
  avatar: string
}

export type MessageType = {
  id: number
  message: string
}

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export type FriendType = {
  id: number
  name: string
  avatar: string
}

export type UserType = {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: PhotosType
  status: string | null
  followed: boolean
}