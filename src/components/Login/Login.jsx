import React from 'react';
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer'
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>        
        <Field component={Input} validate={[required]}
               name='email' placeholder='Email'
        />
      </div>
      <div>        
        <Field component={Input} validate={[required]} type='password'
               name='password' placeholder='Password'
        />
      </div>
      <div>        
        <Field component={Input} name='rememberMe' type='checkbox' /> Remember me
      </div>
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