import React from 'react';
import s from './Login.module.css'
import { reduxForm } from 'redux-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer.ts'
import { Navigate } from 'react-router-dom';

const LoginForm = ({handleSubmit, error, captchaURL}) => {
  return(
    <form onSubmit={handleSubmit}>
      {createField(Input, [required], 'email', 'Email')}
      {createField(Input, [required], 'password', 'Password', {type: 'password'})}
      <div className={s.rememberMeBlock}>
        {createField(Input, [], 'rememberMe', null, {type: 'checkbox'})}
        Remember me
      </div>
      
      {error &&
        <div className={s.formSummaryError}>
          {error}
        </div>
      }

      {captchaURL && <img src={captchaURL} />}      
      {captchaURL &&
        createField(Input, [required], 'captcha', 'Enter symbols from image')
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
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }
  
  if(props.isAuth) return <Navigate to={'/profile'} />

  return (
    <div className={s.loginBlock}>
      <h2>Login Page</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaURL: state.auth.captchaURL
})

export default connect(mapStateToProps, { login })(Login);