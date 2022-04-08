import { ReactElement } from 'react';

import { SignInForm } from 'components';

import { AuthWrapper } from '../components/AuthWrapper';

export const SignIn = (): ReactElement => {
  return (
    <AuthWrapper title="Login into account">
      <div className="rounded-md shadow-sm -space-y-px">
        <SignInForm />
      </div>
    </AuthWrapper>
  );
};
