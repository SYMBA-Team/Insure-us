import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//

import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import { useUser } from './app/hooks';
import Client from './pages/Client';

// ----------------------------------------------------------------------

export default function Router() {
  const { user } = useUser();
  return useRoutes([
    {
      path: '/dashboard',
      element: user ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'clients/:id', element: <Client /> },
        { path: 'clients', element: <User /> },
        { path: 'settings', element: <Products /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: user ? <Navigate to="/dashboard/app" /> : <Login /> },
        { path: 'register', element: user ? <Navigate to="/dashboard/app" /> : <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
