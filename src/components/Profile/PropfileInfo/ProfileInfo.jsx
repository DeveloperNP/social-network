import React, { useState } from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


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

const ProfileInfo = (props) => {
  
  let [avatarFocused, setAvatarFocused] = useState(false);

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  if(!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className={s.profileInfoBlock}>

      <div>
        <div className={s.avatarBlock}
             onMouseOver={() => { setAvatarFocused(true) }}
             onMouseOut={() => { setAvatarFocused(false) }}>
          <img className={s.avatar} src={props.profile.photos.large || userPhoto} alt="AVA" />
          {props.isOwner && avatarFocused && <input type='file' onChange={onMainPhotoSelected} />}
        </div>
      </div>

      <div className={s.descriptionBlock}>
        <div className={s.fullName}>
          {props.profile.fullName}
        </div>
        <div className={s.aboutMe}>
          {props.profile.aboutMe}
        </div>
        <div>
          <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
        </div>
        <div>
          {props.profile.lookingForAJob
            ? <div className={s.imgPlusTextBlock}>
                <img className={s.smallIcon} src={magnifyingGlass} />
                <span>I'm looking for a job</span>
              </div>
            : <div className={s.imgPlusTextBlock}>
                <img className={s.smallIcon} src={doNotDisturb} />
                <span>I'm not looking for a job</span>
              </div>
          }
        </div>
        <div className={s.lookingForAJobDescription}>
          {props.profile.lookingForAJobDescription}
        </div>
      </div>

      <div className={s.contacts}>
        <span className={s.contactsHeader}>Contacts:</span>
        <div className={s.linksBlock}>         
          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={mainLink} /> 
            <span>{props.profile.contacts.mainLink || '-'}</span>
          </div>
        
          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={website}/>
            <span>{props.profile.contacts.website || '-'}</span>
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={vk}/>
            <span>{props.profile.contacts.vk || '-'}</span>
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={twitter}/>
            <span>{props.profile.contacts.twitter || '-'}</span>
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={facebook}/>
            <span>{props.profile.contacts.facebook || '-'}</span>
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={instagram}/>
            <span>{props.profile.contacts.instagram || '-'}</span>
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={youtube}/>
            <span>{props.profile.contacts.youtube || '-'}</span>
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={github}/>
            <span>{props.profile.contacts.github || '-'}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfileInfo;