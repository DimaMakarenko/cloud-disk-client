import { ReactElement } from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { NabBar } from 'components';
import { SignIn, SignUp } from 'pages';

import { Routes } from './Routes';

export const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <NabBar />
      <Switch>
        <Route path={Routes.SingUp} element={<SignUp />} />
        <Route path={Routes.SingIn} element={<SignIn />} />
      </Switch>
    </BrowserRouter>
  );
};

export * from './Routes';
