import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import withRouter from '../../ReactRouter/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  
  componentDidMount() {        
    let userID = this.props.router.params.userID;
    if (!userID) { userID = 2; }
    
    this.props.getUserProfile(userID);
  }
  
  render () {    
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithURLDataProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithURLDataProfileContainer);