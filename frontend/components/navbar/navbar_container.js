import { connect } from 'react-redux';
import { signout, signin } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout()),
  signin: (user) => dispatch(signin(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
