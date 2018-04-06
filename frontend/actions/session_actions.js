import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => (
  SessionApiUtil.signup(user).then((ajaxUser =>
    (dispatch(receiveCurrentUser(ajaxUser)))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const signin = (user) => (dispatch) => (
  SessionApiUtil.signin(user).then(ajaxUser =>
    (dispatch(receiveCurrentUser(ajaxUser))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const signout = () => (dispatch) => (
  SessionApiUtil.signout().then(() =>
    (dispatch(receiveCurrentUser(null))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);
