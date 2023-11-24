import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import withRouter from '../../ReactRouter/withRouter';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends React.Component {
  
  componentDidMount() {        
    let userID = this.props.router.params.userID;
    if (!userID) { userID = 2; }
    
    this.props.getUserProfile(userID);
  }
  
  render () {
    if (!this.props.isAuth) return <Navigate to='/login' />
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithURLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithURLDataProfileContainer);