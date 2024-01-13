import React from 'react';
import s from './ProfileStatus.module.css'
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({ status: this.props.status });
  //   }
  // }

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