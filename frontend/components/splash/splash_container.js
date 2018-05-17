import { connect } from 'react-redux';
import Splash from './splash';
import { receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors,
  books: state.entities.books,
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
