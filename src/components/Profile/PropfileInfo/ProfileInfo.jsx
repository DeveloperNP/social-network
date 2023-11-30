import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


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
  
  if(!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className={s.profileInfoBlock}>
      
      <div>
        {props.profile.photos.large
          ? <img className={s.avatar} src={props.profile.photos.large} alt="AVA" />
          : <img className={s.avatar} src={userPhoto} alt="AVA" />
        }
      </div>

      <div className={s.descriptionBlock}>
        <div className={s.fullName}>
          {props.profile.fullName}
        </div>
        <div className={s.aboutMe}>
          {props.profile.aboutMe}
        </div>
        <div>
          <ProfileStatus status={props.status}/>
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
            {props.profile.contacts.mainLink
              ? <span>{props.profile.contacts.mainLink}</span>
              : <span>-</span>
            }
          </div>
        
          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={website}/>
            {props.profile.contacts.website
              ? <span>{props.profile.contacts.website}</span>
              : <span>-</span>
            } 
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={vk}/>
            {props.profile.contacts.vk
              ? <span>{props.profile.contacts.vk}</span>
              : <span>-</span>
            } 
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={twitter}/>
            {props.profile.contacts.twitter
              ? <span>{props.profile.contacts.twitter}</span>
              : <span>-</span>
            } 
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={facebook}/>
            {props.profile.contacts.facebook
              ? <span>{props.profile.contacts.facebook}</span>
              : <span>-</span>
            } 
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={instagram}/>
            {props.profile.contacts.instagram
              ? <span>{props.profile.contacts.instagram}</span>
              : <span>-</span>
            } 
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={youtube}/>
            {props.profile.contacts.youtube
              ? <span>{props.profile.contacts.youtube}</span>
              : <span>-</span>
            } 
          </div>

          <div className={s.imgPlusTextBlock}>
            <img className={s.smallIcon} src={github}/>
            {props.profile.contacts.github
              ? <span>{props.profile.contacts.github}</span>
              : <span>-</span>
            } 
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfileInfo;