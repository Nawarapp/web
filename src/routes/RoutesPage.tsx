import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Politics } from '../pages/politics';

import Index from '../pages/index';
import { EULATerms } from '../pages/eula-terms';
import { RequestDeleteUser } from '../pages/request-delete';
import { HostAgreement } from '../pages/host-agreement';

const RootNavigator = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/politics',
      element: <Politics />,
    },
    {
      path: '/terms',
      element: <EULATerms />,
    },
    {
      path: '/request-delete',
      element: <RequestDeleteUser />,
    },
    {
      path: '/host-agreement',
      element: <HostAgreement />,
    },
    {
      path: '/eula-terms',
      element: <EULATerms />,
    },
    {
      path: '*',
      element: <Index />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export { RootNavigator };
