import React, { ChangeEvent, useState, useEffect } from 'react'
import s from './ProfileStatus.module.css'

type PropsType = {
  status: string
  updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: PropsType): React.JSX.Element => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState<string>(props.status)
  
  useEffect( () => {
    setStatus(props.status)
  }, [props.status] )

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span className={s.status} onClick={ activateEditMode }>
            {props.status || '-----'}
          </span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } value={status} />
        </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks