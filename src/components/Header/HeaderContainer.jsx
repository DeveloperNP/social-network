import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { checkAuthUser } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  
  componentDidMount () {
    this.props.checkAuthUser();
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

export default connect(mapStateToProps, { checkAuthUser })(HeaderContainer);