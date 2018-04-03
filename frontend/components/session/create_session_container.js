import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin } from '../../actions/session_actions';



const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signin: (user) => dispatch(signin(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
