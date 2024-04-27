import React from 'react'
import Header from './Header.tsx'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer.ts'
import { ProfileType } from '../../types/types.ts'
import { AppStateType } from '../../redux/redux-store.ts'

type MapStatePropsType = {
  authUserProfile: ProfileType | null
  isAuth: boolean
  login: string | null
}

type MapDispatchPropsType = {
  logout: () => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class HeaderContainer extends React.Component<PropsType> { 
  render () {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  authUserProfile: state.auth.authUserProfile
})

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { logout })(HeaderContainer)