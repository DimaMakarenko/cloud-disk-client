import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { Input, Button } from 'components';

type SignInFormType = {
  email: string;
  password: string;
};

export const SignInForm = (): ReactElement => {
  const { register, handleSubmit } = useForm<SignInFormType>();

  const onSubmit = handleSubmit((data) => {
    console.log('sign in with ', data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="email"
        placeholder="Email"
        required
        type="text"
        register={{ ...register('email') }}
      />
      <Input
        id="password"
        required
        type="password"
        placeholder="Password"
        register={{ ...register('password') }}
      />
      <Button type="submit">Sign in</Button>
    </form>
  );
};
