import React from 'react'
import Profile from './Profile.tsx'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/profile-reducer.ts'
import withRouter from '../../ReactRouter/withRouter.js'
import { compose } from 'redux'
import { Navigate } from 'react-router-dom'
import { ProfileType } from '../../types/types.ts'
import { AppStateType } from '../../redux/redux-store.ts'



type MapStatePropsType = {
  profile: ProfileType | null
  status: string
  authUserID: number | null
}

type MapDispatchPropsType = {
  getUserProfile: (userID: number) => void
  getUserStatus: (userID: number) => void
  updateUserStatus: (status: string) => void
  savePhoto: (file: any) => void
  saveProfile: (profile: ProfileType) => any
}

type OwnPropsType = {}



type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & {router: any}

type StateType = {
  idIsNull: boolean
}

class ProfileContainer extends React.Component<PropsType, StateType> {
  state = {
    idIsNull: false
  }

  refreshProfile() {
    const {router, authUserID, getUserProfile, getUserStatus} = this.props
    let userID = router.params.userID
    if (!userID) {
      userID = authUserID
      if (!userID) {        
        this.setState({ idIsNull: true })
      }
    }
    
    getUserProfile(userID)
    getUserStatus(userID)
  }

  componentDidMount() {     
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: PropsType) {
    if(this.props.router.params.userID !== prevProps.router.params.userID) {
      this.refreshProfile()
    }
  }
  
  render () {    
    if(this.state.idIsNull) {
      return <Navigate to={'/login'} />
    }
    // @ts-ignore
    return <Profile {...this.props}
                    isOwner={!this.props.router.params.userID} />
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserID: state.auth.userID
})

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer)