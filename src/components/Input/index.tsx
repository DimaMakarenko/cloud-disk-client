import { ReactNode, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

export const Input = ({ id, children, ...otherProps }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {children}
      </label>
      <input
        id={id}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2.5"
        {...otherProps}
      />
    </div>
  );
};
