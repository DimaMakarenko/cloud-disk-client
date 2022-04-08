import { ReactNode } from 'react';

interface AuthWrapper {
  children: ReactNode;
  title: string;
}

export const AuthWrapper = ({ children, title }: AuthWrapper) => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
        {children}
      </div>
    </div>
  );
};
