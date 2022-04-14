import { AnyAction } from 'redux';

import { User } from 'entities';

type UserState = {
  currentUser: User | undefined;
};

const defaultState: UserState = {
  currentUser: undefined,
};

enum ActionTypes {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

export function userReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_USER: {
      return {
        ...state,
        currentUser: action.payload.user,
      };
    }
    case ActionTypes.LOGOUT: {
      localStorage.removeItem('token');
      return defaultState;
    }
    default:
      return state;
  }
}

export const setUser = (user: User) => ({
  type: ActionTypes.SET_USER,
  payload: { user: user },
});

export const logout = () => ({ type: ActionTypes.LOGOUT });
