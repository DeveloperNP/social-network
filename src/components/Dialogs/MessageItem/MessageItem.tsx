import React from 'react'
import s from './../Dialogs.module.css'

type PropsType = {
  message: string
}

const MessageItem = ({message}: PropsType): React.JSX.Element => {
  return (
    <div className={s.message}>
      {message}
    </div>
  )
}

export default MessageItem