import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'account',
        element: <p>111</p>
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
