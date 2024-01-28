import React from 'react';
import s from './Login.module.css'
import { reduxForm } from 'redux-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer'
import { Navigate } from 'react-router-dom';

const LoginForm = ({handleSubmit, error}) => {
  return(
    <form onSubmit={handleSubmit}>
      {createField(Input, [required], 'email', 'Email')}
      {createField(Input, [required], 'password', 'Password', {type: 'password'})}
      {createField(Input, [], 'rememberMe', null, {type: 'checkbox'}, 'Remember me')}
      {
        error &&
        <div className={s.formSummaryError}>
          {error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }
  
  if(props.isAuth) return <Navigate to={'/profile'} />

  return (
    <div className={s.loginBlock}>
      <h2>Login Page</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);