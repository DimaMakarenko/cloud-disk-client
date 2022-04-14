import { ReactElement, ReactNode, HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'hooks';
import { Routes } from 'routes';
import { logout } from 'store/modules/user';
import { getIsAuthSelector } from 'store/modules/user/selectors';

type LinkType = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

const Link = ({ children, ...otherProps }: LinkType): ReactElement => (
  <span
    {...otherProps}
    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </span>
);

export const NabBar = (): ReactElement => {
  const isAuth = useSelector(getIsAuthSelector);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 right-0 justify-end">
              {isAuth ? (
                <>
                  <Link onClick={handleLogout}>Logout</Link>
                </>
              ) : (
                <>
                  <NavLink to={Routes.SingIn}>
                    <Link>Sign In</Link>
                  </NavLink>
                  <NavLink to={Routes.SingUp}>
                    <Link>Sign Up</Link>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
