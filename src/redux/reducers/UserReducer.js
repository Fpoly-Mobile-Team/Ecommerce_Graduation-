import {stateDefault} from '@redux/common/initialStates';
import Storage from '@utils/storage';
import Actions, {_onSuccess, _onUnmount} from '../actions';
import {reducerDefault} from '../common/reducers';

export const login = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_ACCOUNT);
};

export const userInfo = (...props) => {
  return reducerDefault(...props, Actions.GET_USER_INFORMATION);
};

export const tokenUser = (state = stateDefault, action) => {
  switch (action.type) {
    case Actions.TOKEN_USER: {
      Storage.setItem('TOKEN_USER', action.data);
      return {...state, data: action.data};
    }
    case _onUnmount(Actions.TOKEN_USER): {
      return {...stateDefault};
    }
    default:
      return state;
  }
};
export const logout = (state = stateDefault, action) => {
  switch (action.type) {
    case Actions.LOGOUT_ACCOUNT: {
      return {...state, isLoading: true};
    }
    case _onSuccess(Actions.LOGOUT_ACCOUNT): {
      Storage.removeItem('TOKEN_USER');
      return {...state, isLoading: false};
    }
    case _onUnmount(Actions.LOGOUT_ACCOUNT): {
      return {...stateDefault};
    }
    default:
      return state;
  }
};
export const UserReducer = {login, tokenUser, logout, userInfo};
