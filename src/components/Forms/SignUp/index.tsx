import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { Input, Button } from 'components';

type SignUpFormType = {
  fullName: string;
  email: string;
  password: string;
};

export const SignUpForm = (): ReactElement => {
  const { register, handleSubmit } = useForm<SignUpFormType>();

  const onSubmit = handleSubmit((data) => {
    console.log('sign up with', data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="fullName"
        placeholder="Full name"
        required
        register={{ ...register('fullName') }}
      />
      <Input id="email" placeholder="Email" required register={{ ...register('email') }} />
      <Input
        id="password"
        placeholder="Password"
        required
        register={{ ...register('password') }}
        type="password"
      />
      <Button type="submit">Sign up</Button>
    </form>
  );
};
