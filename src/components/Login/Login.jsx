import React from 'react';
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>        
        <Field component={Input} validate={[required]}
               name={'login'} placeholder={'Login'}
        />
      </div>
      <div>        
        <Field component={Input} validate={[required]}
               name={'password'} placeholder={'Password'}
        />
      </div>
      <div>        
        <Field component={Input} name={'rememberMe'} type={'checkbox'} /> Remember me
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
    console.log(formData);
  }
  
  return (
    <div className={s.loginBlock}>
      <h2>Login Page</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;