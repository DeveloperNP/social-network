import React from 'react'
import s from './FriendItem.module.css'

type PropsType = {
  avatar: string
  name: string
}

const FriendItem = ({avatar, name}: PropsType): React.JSX.Element => { 
  return (
    <div className={s.friendItemWrapper}>
      <div>
        <img className={s.avatar} src={avatar} alt="AVA" />
      </div>
      <span className={s.name}>
        {name}
      </span>
    </div>
  )
}

export default FriendItem