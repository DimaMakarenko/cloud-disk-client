import { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { NabBar } from 'components';
import { SignIn, SignUp } from 'pages';
import { auth } from 'store/modules/user/actions';
import { getIsAuthSelector } from 'store/modules/user/selectors';

import { Routes } from './Routes';

export const App = (): ReactElement => {
  const isAuth = useSelector(getIsAuthSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(auth(token));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <NabBar />
      <Switch>
        {!isAuth && (
          <>
            <Route path={Routes.SingUp} element={<SignUp />} />
            <Route path={Routes.SingIn} element={<SignIn />} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export * from './Routes';
