import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/userPhoto.jpg'
import logoutIcon from '../../assets/images/logout_blue.png'
import { ProfileType } from '../../types/types'

type PropsType = {
  authUserProfile: ProfileType | null
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header = ({authUserProfile, isAuth, login, logout}: PropsType): React.JSX.Element => {
  
  if (isAuth && !authUserProfile) {
    return (
      <header className={s.header}>
        <img src='./logo512.png' />
        <div className={s.loginBlock}>
          <div className={s.loginButton}><NavLink to={'/login'}>Login</NavLink></div>
        </div>
      </header>
    )
  }
  
  return (
    <header className={s.header}>
      <img src='./logo512.png' />
      <div className={s.loginBlock}>
        { isAuth && authUserProfile
            ? <div className={s.authUserInfo}>
                <img onClick={logout} className={s.logoutIcon} src={logoutIcon} title='Logout' alt='Logout' />
                <img src={authUserProfile.photos.small != null ? authUserProfile.photos.small : userPhoto} alt='AVA' className={s.avatar} />
                <div>
                  {authUserProfile.fullName}
                </div>
              </div> 
            : <div className={s.loginButton}><NavLink to={'/login'}>Login</NavLink></div> }
      </div>
    </header>
  )
}

export default Header