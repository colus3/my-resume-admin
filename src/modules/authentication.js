/**
 * Created by colus on 2017. 5. 31..
 */
import { createAction, handleActions } from 'redux-actions';
import { Cookies } from 'react-cookie';
import update from 'react-addons-update';
import axios from 'axios';
import queryString from 'query-string';

const LOGIN = 'my-resume-admin/login/LOGIN';
const LOGIN_SUCCESS = 'my-resume-admin/login/SUCCESS';
const LOGIN_FAILURE = 'my-resume-admin/login/FAILURE';
const LOGOUT = 'my-resume-admin/logout/LOGOUT';
const LOGOUT_SUCCESS = 'my-resume-admin/logout/SUCCESS';
const LOGOUT_FAILURE = 'my-resume-admin/logout/FAILURE';

const initialState = {
    status: 'INIT',
    isLoggedIn: false,
    currentUser: '',
    token: ''
};

export default handleActions({
  [LOGIN]: (state, action) => update(state, {
    status: { $set: 'WAITING' }
  }),
  [LOGIN_SUCCESS]: (state, action) => {
    return update(state, {
      status: { $set: 'LOGIN' },
      isLoggedIn: { $set: true },
      currentUser: { $set: action.payload.id },
      token: { $set: action.payload.token }
    });
  },
  [LOGIN_FAILURE]: (state, action) => update(state, {
    status: { $set: 'FAILURE' }
  }),
  [LOGOUT]: (state, action) => update(state, {
    status: { $set: 'LOGOUT_WAITING' }
  }),
  [LOGOUT_SUCCESS]: (state, action) => update(state, {
    status: { $set: 'LOGOUT' },
    isLoggedIn: { $set: false },
    currentUser: { $set: '' },
    token: { $set: '' }
  }),
  [LOGOUT_FAILURE]: (state, action) => update(state, {
    status: { $set: 'FAILURE' }
  }),
}, initialState);

/* LOGIN */
export const loginRequest = (id, password) => {
  return dispatch => {
    // Inform Login API is starting
    dispatch(login());

    // API REQUEST
    return axios.post('http://localhost:4000/api/admin/auth/login',
      queryString.stringify({ id: id, password: password }), {
        headers: { 'Content-type': 'application/x-www-form-urlencoded'}
      })
      .then(response => {
        console.log('loginRequest response : ', response.data);
        new Cookies().set('login_info', { isLoggedIn: true, currentUser: response.data.currentUser, token: response.data.token });
        return dispatch(loginSuccess(response.data));
      })
      .catch(error => dispatch(loginFailure(error)));
  };
};

export const login = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS); // data
export const loginFailure = createAction(LOGIN_FAILURE); // error

export const logoutRequest = () => {
  return dispatch => {
    dispatch(logout());

    return axios.post('http://localhost:4000/api/admin/auth/logout')
      .then(response => {
        new Cookies().remove('login_info');
        dispatch(logoutSuccess());
      })
      .catch(error => dispatch(logoutFailure()));
  };
};

export const logout = createAction(LOGOUT);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFailure = createAction(LOGOUT_FAILURE);
