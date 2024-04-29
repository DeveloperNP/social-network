import Sidebar from './Sidebar.tsx'
import { connect } from 'react-redux'
import { FriendType } from '../../types/types.ts'
import { AppStateType } from '../../redux/redux-store.ts'

type MapStatePropsType = {
  pageData: { friends: Array<FriendType> }
}

type MapDispatchPropsType = {}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    pageData: state.sidebar
  }
}

const SidebarContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps)(Sidebar)

export default SidebarContainer