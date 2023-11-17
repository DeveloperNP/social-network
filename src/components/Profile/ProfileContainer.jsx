import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import withRouter from '../../ReactRouter/withRouter';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  
  componentDidMount() {    
    
    let userID = this.props.router.params.userID;
    if (!userID) { userID = 2; }
    
    profileAPI.getUserProfile(userID)
      .then(data => {        
        this.props.setUserProfile(data);        
      });
  }
  
  render () {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithURLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithURLDataProfileContainer);