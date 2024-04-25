import { addMessageClearForm } from '../../redux/dialogs-reducer.ts';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    pageData: state.dialogsPage,
  }
}

export default compose(
  connect(mapStateToProps, { addMessageClearForm }),
  withAuthRedirect
)(Dialogs);