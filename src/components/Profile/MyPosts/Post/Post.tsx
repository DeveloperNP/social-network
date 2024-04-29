import React from 'react'
import s from './Post.module.css'

type PropsType = {
  message: string
  likesCount: number
}

const Post = ({message, likesCount}: PropsType): React.JSX.Element => { 
  return (
    <div className={s.item}>
      <img src="./images/Nickolai_avatar.jpg" alt="AVA" />
      <span>{message}</span>
      <button>{likesCount} 👍🏻</button>
    </div>
  )
}

export default Post