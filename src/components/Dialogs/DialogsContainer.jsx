import { addMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
  return {
    pageData: state.dialogsPage,
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, { addMessage, updateNewMessageText })(AuthRedirectComponent);

export default DialogsContainer;