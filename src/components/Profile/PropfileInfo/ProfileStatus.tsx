import React, { ChangeEvent } from 'react';
import s from './ProfileStatus.module.css'

type PropsType = {
  status: string
  updateUserStatus: (status: string) => void
}

type StateType = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
  state = {
    editMode: false,
    status: this.props.status
  }
  
  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    const {status} = this.props;
    if (prevProps.status !== status) {
      this.setState({ status: status });
    }
  }

  activateEditMode = () => {    
    this.setState({ editMode: true });
  }
  
  deactivateEditMode = () => {
    const {updateUserStatus} = this.props;
    this.setState({ editMode: false });
    updateUserStatus(this.state.status);
  }
  
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });    
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span className={s.status} onClick={ this.activateEditMode }>
              {this.props.status || '-----'}
            </span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={ this.onStatusChange } autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;