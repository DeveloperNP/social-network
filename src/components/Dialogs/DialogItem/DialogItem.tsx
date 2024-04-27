import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
  id: number
  avatar: string
  name: string
}

const DialogItem = ({id, avatar, name}: PropsType): React.JSX.Element => {
  const path = `/dialogs/${id}`
  
  return (
    <div className={s.dialogItemWrapper}>
      <div>
        <img className={s.avatar} src={avatar} alt="AVA" />
      </div>
      <div className={s.item}>
        <NavLink to={path} className={navData => navData.isActive ? s.activeDialog : s.dialog}>
          {name}
        </NavLink>
      </div>
    </div>
  )
}

export default DialogItem