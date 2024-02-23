import React, { useState } from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';


import userPhoto from '../../../assets/images/userPhoto.jpg'
import magnifyingGlass from '../../../assets/images/magnifying_glass.png'
import doNotDisturb from '../../../assets/images/do_not_disturb.png'

import mainLink from '../../../assets/images/mainLink.png'
import website from '../../../assets/images/website.png'
import vk from '../../../assets/images/vk.png'
import twitter from '../../../assets/images/twitter.png'
import facebook from '../../../assets/images/facebook.png'
import instagram from '../../../assets/images/instagram.png'
import youtube from '../../../assets/images/youtube.png'
import github from '../../../assets/images/github.png'

export const contacts = {
  "mainLink": mainLink,
  "website": website,
  "vk": vk,
  "twitter": twitter,
  "facebook": facebook,
  "instagram": instagram,
  "youtube": youtube,
  "github": github
}

const Contact = ({link, image}) => {
  return <div className={s.imgPlusTextBlock}>    
    <img className={s.smallIcon} src={image} alt='link-img' />
    <span>{link || '-'}</span>
  </div>
}

const ProfileItem = ({value, image}) => {
  return <Contact link={value} image={image} />
}

const ProfileData = ({profile, isOwner, status, updateUserStatus, setEditMode}) => {
  return <>
    <div className={s.descriptionBlock}>
      <div className={s.fullName}>
        {profile.fullName}
      </div>
      <div className={s.aboutMe}>
        {profile.aboutMe}
      </div>
      <div>
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
      </div>
      <div>
        {profile.lookingForAJob
          ? <ProfileItem value={"I'm looking for a job"} image={magnifyingGlass} />
          : <ProfileItem value={"I'm not looking for a job"} image={doNotDisturb} />
        }
      </div>
      <div className={s.lookingForAJobDescription}>
        {profile.lookingForAJobDescription}
      </div>
    </div>

    <div className={s.contacts}>
      <span className={s.contactsHeader}>Contacts:</span>
      <div className={s.linksBlock}>
        {Object.keys(profile.contacts).map(key => {
          return <Contact link={profile.contacts[key]} image={contacts[key]} key={key} />
        })}
      </div>
    </div>

    {isOwner && <div><button onClick={setEditMode}>Edit</button></div>}
  </>
}

const ProfileInfo = ({profile, isOwner, savePhoto, saveProfile, status, updateUserStatus}) => {
  
  let [avatarFocused, setAvatarFocused] = useState(false);
  let [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => { setEditMode(false) })
  }

  if(!profile) {
    return <Preloader />
  }
  
  return (
    <div className={s.profileInfoBlock}>

      <div>
        <div className={s.avatarBlock}
             onMouseOver={() => { setAvatarFocused(true) }}
             onMouseOut={() => { setAvatarFocused(false) }}>
          <img className={s.avatar} src={profile.photos.large || userPhoto} alt="AVA" />
          {isOwner && avatarFocused && <input type='file' onChange={onMainPhotoSelected} />}
        </div>
      </div>

      {editMode
        ? <ProfileDataForm initialValues={profile}
                           profile={profile}                           
                           onSubmit={onSubmit}
                           status={status}
                           updateUserStatus={updateUserStatus} />
        : <ProfileData profile={profile}
                       isOwner={isOwner}
                       status={status}
                       updateUserStatus={updateUserStatus}
                       setEditMode={ () => { setEditMode(true) } } />
      }
      
    </div>
  )
}

export default ProfileInfo;