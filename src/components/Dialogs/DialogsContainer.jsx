import { addMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    pageData: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

const DialogsContainer = connect(mapStateToProps, { addMessage, updateNewMessageText })(Dialogs);

export default DialogsContainer;