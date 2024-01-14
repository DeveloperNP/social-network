import React from 'react';
import s from './ProfileStatus.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  
  useEffect( () => {
    setStatus(props.status);
  }, [props.status] );

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
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

export default ProfileStatusWithHooks;