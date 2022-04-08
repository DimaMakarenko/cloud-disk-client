import { ReactElement } from 'react';

import { Input, Button } from 'components';

export const SignInForm = (): ReactElement => {
  return (
    <form>
      <Input id="email-address" name="email" type="email" required placeholder="Email address">
        Email address
      </Input>
      <Input id="password" name="password" type="password" required placeholder="Password">
        Password
      </Input>
      <Button type="submit">Sign in</Button>
    </form>
  );
};
