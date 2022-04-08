import { ReactElement, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { Routes } from 'routes';

const Link = ({ children }: { children: ReactNode }): ReactElement => (
  <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </span>
);

export const NabBar = (): ReactElement => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 right-0 justify-end">
              <NavLink to={Routes.SingIn}>
                <Link>Sign In</Link>
              </NavLink>
              <NavLink to={Routes.SingUp}>
                <Link>Sign Up</Link>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
