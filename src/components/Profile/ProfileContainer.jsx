import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { showUserProfile } from '../../redux/profile-reducer';
import withRouter from '../../ReactRouter/withRouter';

class ProfileContainer extends React.Component {
  
  componentDidMount() {        
    let userID = this.props.router.params.userID;
    if (!userID) { userID = 2; }
    
    this.props.showUserProfile(userID);
  }
  
  render () {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithURLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { showUserProfile })(WithURLDataProfileContainer);