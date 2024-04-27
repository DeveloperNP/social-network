import { InitialStateType, addMessageClearForm } from '../../redux/dialogs-reducer.ts'
import Dialogs from './Dialogs.tsx'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store.ts'

type MapStatePropsType = {
  pageData: InitialStateType
}

type MapDispatchPropsType = {
  addMessageClearForm: (newMessageText: string) => void
}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    pageData: state.dialogsPage,
  }
}

export default compose(
  withAuthRedirect,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { addMessageClearForm })
)(Dialogs)