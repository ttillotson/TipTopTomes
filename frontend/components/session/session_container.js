// // import { connect } from 'react-redux';
// // import Session from './session';
// // import { signup, signin, signout } from '../../actions/session_actions';
// //
// //
// // const mapStateToProps = state => ({
// //   session: state.session
// // });
// //
// // const mapDispatchToProps = dispatch => ({
// //   // REMOVE SIGNUP & SIGN IN IF NEEDED
// //   signup: (user) => dispatch(signup(user)),
// //   signin: (user) => dispatch(signin(user)),
// //   signout: () => dispatch(signout())
// // });
// //
// // export default connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(Session);
//
//
// import { connect } from 'react-redux';
// import SessionButtons from './session_buttons';
// import { signout } from '../../actions/session_actions';
//
// const mapStateToProps = ({ session }) => ({
//   currentUser: session.currentUser
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   signout: () => dispatch(signout())
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SessionButtons);
