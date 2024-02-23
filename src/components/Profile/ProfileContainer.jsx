import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import withRouter from '../../ReactRouter/withRouter';
import { compose } from 'redux';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends React.Component {
  state = {
    idIsNull: false
  }

  refreshProfile() {
    const {router, authUserID, getUserProfile, getUserStatus} = this.props; 
    let userID = router.params.userID;
    if (!userID) {
      userID = authUserID;
      if (!userID) {        
        this.setState({ idIsNull: true });
      }
    }
    
    getUserProfile(userID);
    getUserStatus(userID);
  }

  componentDidMount() {     
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if(this.props.router.params.userID !== prevProps.router.params.userID) {
      this.refreshProfile();
    }
  }
  
  render () {    
    if(this.state.idIsNull) {
      return <Navigate to={'/login'} />
    }
    
    return <Profile {...this.props}
                    isOwner={!this.props.router.params.userID} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserID: state.auth.userID
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer);