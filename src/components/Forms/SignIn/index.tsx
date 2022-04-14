import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Input, Button } from 'components';
import { signIn } from 'store/modules/user';

export type SignInFormType = {
  email: string;
  password: string;
};

export const SignInForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormType>();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit((data) => dispatch(signIn(data)));

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
      <Button type="submit">{isSubmitting ? 'Loading...' : 'Sign in'}</Button>
    </form>
  );
};
