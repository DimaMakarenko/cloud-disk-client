import { ReactElement } from 'react';

import { Input, Button } from 'components';

import { AuthWrapper } from '../AuthWrapper';

export const SignIn = (): ReactElement => {
  return (
    <AuthWrapper title="Login into account">
      <div className="rounded-md shadow-sm -space-y-px">
        <Input id="email-address" name="email" type="email" required placeholder="Email address">
          Email address
        </Input>
        <Input id="password" name="password" type="password" required placeholder="Password">
          Password
        </Input>
        <Button type="submit">Sign in</Button>
      </div>
    </AuthWrapper>
  );
};
