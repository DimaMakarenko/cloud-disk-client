import { ReactElement } from 'react';

import { Input, Button } from 'components';

export const SignUpForm = (): ReactElement => {
  return (
    <form>
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
    </form>
  );
};
