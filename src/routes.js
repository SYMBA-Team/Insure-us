import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import MobileLayout from './layouts/MobileLayout';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import { useUser } from './app/hooks';
import Client from './pages/Client';
import Home from './mobile/pages/Home';
import Fitness from './mobile/pages/Fitness';
import Personal from './mobile/pages/Personal';
import Synced from './mobile/pages/Synced';
import { useSignUpMutation, useSignInMutation, useCSignInMutation, useCSignUpMutation } from './app/backend';
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
      path: '/mobile',
      // eslint-disable-next-line no-nested-ternary
      element: user ? <MobileLayout /> : <Navigate to="/clogin" />,
      //element: user ? user.syncId ? <MobileLayout /> : <Navigate to="/sync" /> : <Navigate to="/clogin" />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'fitness', element: <Fitness /> },
        { path: 'personal', element: <Personal /> },

        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: 'mobile', element: <Navigate to="/mobile/home" /> },
        { path: 'synced', element: user ? <Synced /> : <Navigate to="/login" /> },
        { path: 'login', element: user ? <Navigate to="/dashboard/app" /> : <Login useLog={useSignInMutation} /> },
        {
          path: 'register',
          element: user ? <Navigate to="/dashboard/app" /> : <Register useLog={useSignUpMutation} />,
        },
        { path: 'clogin', element: user ? <Navigate to="/mobile/home" /> : <Login useLog={useCSignInMutation} /> },
        {
          path: 'cregister',
          element: user ? <Navigate to="/mobile/home" /> : <Register useLog={useCSignUpMutation} />,
        },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
