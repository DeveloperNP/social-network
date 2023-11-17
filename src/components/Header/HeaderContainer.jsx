import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthUserProfile } from '../../redux/auth-reducer'
import { authAPI, profileAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  
  componentDidMount () {    
    authAPI.checkAuthUser()
      .then(data => {
        if(data.resultCode === 0) {          
          let {id, email, login} = data.data;
          this.props.setAuthUserData(id, email, login);
        
          profileAPI.getUserProfile(id)
            .then(data => {                            
              this.props.setAuthUserProfile(data);                      
            });
        }
      });
  }
  
  render () {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  authUserProfile: state.auth.authUserProfile
});

export default connect(mapStateToProps, {setAuthUserData, setAuthUserProfile})(HeaderContainer);