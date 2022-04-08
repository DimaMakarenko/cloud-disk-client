import { ReactElement } from 'react';

import { Input, Button } from 'components';

import { AuthWrapper } from '../AuthWrapper';

export const SignUp = (): ReactElement => {
  return (
    <AuthWrapper title="Create a new account">
      <div className="rounded-md shadow-sm -space-y-px">
        <Input id="fullName" name="fullName" type="text" required placeholder="Full name">
          Full name
        </Input>
        <Input id="email-address" name="email" type="email" required placeholder="Email address">
          Email address
        </Input>
        <Input id="password" name="password" type="password" required placeholder="Password">
          Password
        </Input>
        <Button type="submit">Sign up</Button>
      </div>
    </AuthWrapper>
  );
};
