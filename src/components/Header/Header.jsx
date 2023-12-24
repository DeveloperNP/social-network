import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/userPhoto.jpg'
import logoutIcon from '../../assets/images/logout_blue.png'

const Header = (props) => {
  
  if (props.isAuth && !props.authUserProfile) {
    return (
      <header className={s.header}>
        <img src='./logo512.png' />
        <div className={s.loginBlock}>
          <div className={s.loginButton}><NavLink to={'/login'}>Login</NavLink></div>
        </div>
      </header>
    );
  }
  
  return (
    <header className={s.header}>
      <img src='./logo512.png' />
      <div className={s.loginBlock}>
        { props.isAuth && props.authUserProfile
            ? <div className={s.authUserInfo}>
                <img onClick={props.logout} className={s.logoutIcon} src={logoutIcon} title='Logout' alt='Logout' />
                <img src={props.authUserProfile.photos.small != null ? props.authUserProfile.photos.small : userPhoto} alt='AVA' className={s.avatar} />
                <div>
                  {props.authUserProfile.fullName}
                </div>
              </div> 
            : <div className={s.loginButton}><NavLink to={'/login'}>Login</NavLink></div> }
      </div>
    </header>
  );
}

export default Header;