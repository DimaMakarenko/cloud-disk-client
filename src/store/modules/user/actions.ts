import axios from 'axios';

import { SignUpFormType, SignInFormType } from 'components';

import { setUser } from '.';

export const signUp = async ({ email, password, fullName }: SignUpFormType) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/registration', {
      email,
      password,
      fullName,
    });

    console.log('response', response);
  } catch (e) {
    console.error(e);
  }
};

type Dispatch = (func: unknown) => void;

export const signIn = ({ email, password }: SignInFormType) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      dispatch(setUser(response.data.user));
      response?.data?.token && localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.error(e);
    }
  };
};

export const auth = (token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/auth', {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(setUser(response.data.user));
      response?.data?.token && localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.error(e);
      localStorage.removeItem('token');
    }
  };
};
