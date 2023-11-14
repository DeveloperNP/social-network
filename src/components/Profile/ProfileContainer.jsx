import React from 'react';
import axios from 'axios'
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import withRouter from '../../ReactRouter/withRouter';

class ProfileContainer extends React.Component {
  
  componentDidMount() {    
    
    let userID = this.props.router.params.userID;
    if (!userID) { userID = 2; }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`, {withCredentials: true})
      .then(response => {
        this.props.setUserProfile(response.data);        
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