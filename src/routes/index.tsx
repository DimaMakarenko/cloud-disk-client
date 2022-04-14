import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { NabBar } from 'components';
import { SignIn, SignUp } from 'pages';
import { getIsAuthSelector } from 'store/modules/user/selectors';

import { Routes } from './Routes';

export const App = (): ReactElement => {
  const isAuth = useSelector(getIsAuthSelector);

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
