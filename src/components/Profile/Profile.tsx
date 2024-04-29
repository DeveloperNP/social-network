import React from 'react'
import { ProfileType } from '../../types/types.ts'
import ProfileInfo from './PropfileInfo/ProfileInfo.tsx'
import MyPostsContainer from './MyPosts/MyPostsContainer.tsx'

type PropsType = {
  profile: ProfileType
  isOwner: boolean
  status: string
  updateUserStatus: (status: string) => void
  savePhoto: (file: any) => void
  saveProfile: (profile: ProfileType) => any
}

const Profile = ({profile, isOwner, status, updateUserStatus, savePhoto, saveProfile}: PropsType): React.JSX.Element => {
  return (
    <div>
      <ProfileInfo profile={profile}
                   isOwner={isOwner}
                   status={status}
                   updateUserStatus={updateUserStatus}                   
                   savePhoto={savePhoto}
                   saveProfile={saveProfile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile