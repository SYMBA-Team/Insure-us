// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'clients',
    path: '/dashboard/clients',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'settings',
    path: '/dashboard/settings',
    icon: getIcon('eva:people-fill'),
  },
];

export default navConfig;