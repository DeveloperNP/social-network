import React from 'react'
import s from './Login.module.css'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { Input, createField } from '../common/FormsControls/FormsControls.tsx'
import { required } from '../../utils/validators/validators.ts'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer.ts'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-store.ts'

type LoginFormOwnProps = { captchaURL: string | null }

type LoginFormPropsType = InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps

const LoginForm = ({handleSubmit, error, captchaURL}: LoginFormPropsType) => {
  return(
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>(Input, [required], 'email', 'Email')}
      {createField<LoginFormValuesTypeKeys>(Input, [required], 'password', 'Password', {type: 'password'})}
      <div className={s.rememberMeBlock}>
        {createField<LoginFormValuesTypeKeys>(Input, [], 'rememberMe', undefined, {type: 'checkbox'})}
        Remember me
      </div>
      
      {error &&
        <div className={s.formSummaryError}>
          {error}
        </div>
      }

      {captchaURL && <img src={captchaURL} />}      
      {captchaURL &&
        createField<LoginFormValuesTypeKeys>(Input, [required], 'captcha', 'Enter symbols from image')
      }

      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)



type MapStatePropsType = {
  isAuth: boolean
  captchaURL: string | null
}

type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType

type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormValuesTypeKeys = keyof LoginFormValuesType

// If there are some problems with assigning 'string | number | symbol' to 'string'
// type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login = ({isAuth, captchaURL, login}: LoginPropsType) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }
  
  if(isAuth) return <Navigate to={'/profile'} />

  return (
    <div className={s.loginBlock}>
      <h2>Login Page</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL} />
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaURL: state.auth.captchaURL
})

export default connect(mapStateToProps, { login })(Login)