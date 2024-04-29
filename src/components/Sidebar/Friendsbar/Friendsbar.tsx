import React from 'react'
import s from './Friendsbar.module.css'
import FriendItem from './FriendItem/FriendItem.tsx'
import { FriendType } from '../../../types/types.ts'

type PropsType = {
  friends: Array<FriendType>
}

const Friendsbar = ({friends}: PropsType): React.JSX.Element => {
  let friendsElements = friends.map(f => <FriendItem key={f.id} name={f.name} avatar={f.avatar} />)

  return (
    <div className={s.friendsbarWrapper}>
      <span className={s.header}>Friends</span>
      <div className={s.friendItems}>
        {friendsElements}
      </div>
    </div>
  )
}

export default Friendsbar