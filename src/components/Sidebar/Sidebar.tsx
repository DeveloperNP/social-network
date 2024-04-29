import React from 'react'
import s from './Sidebar.module.css'
import Navbar from './Navbar/Navbar.tsx'
import Friendsbar from './Friendsbar/Friendsbar.tsx'
import { FriendType } from '../../types/types.ts'

type PropsType = {
  pageData: { friends: Array<FriendType> }
}

const Sidebar = ({pageData}: PropsType): React.JSX.Element => {
  return (
    <div className={s.sidebarWrapper}>
      <Navbar />
      <Friendsbar friends={pageData.friends}/>
    </div>
  )
}

export default Sidebar