import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import withRouter from '../../ReactRouter/withRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount() {        
    let userID = this.props.router.params.userID;
    if (!userID) {
      userID = 30339;
    }
    
    this.props.getUserProfile(userID);
    this.props.getUserStatus(userID);
  }
  
  render () {    
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter
)(ProfileContainer);