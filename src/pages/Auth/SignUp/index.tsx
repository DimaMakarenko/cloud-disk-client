import { ReactElement } from 'react';

import { SignUpForm } from 'components';

import { AuthWrapper } from '../components/AuthWrapper';

export const SignUp = (): ReactElement => {
  return (
    <AuthWrapper title="Create a new account">
      <div className="rounded-md shadow-sm -space-y-px">
        <SignUpForm />
      </div>
    </AuthWrapper>
  );
};
