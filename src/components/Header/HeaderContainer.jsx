import React from 'react';
import axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthUserProfile } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  
  componentDidMount () {    
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if(response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, email, login);

          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {withCredentials: true})
            .then(response => {              
              this.props.setAuthUserProfile(response.data);                      
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