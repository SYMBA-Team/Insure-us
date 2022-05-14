import { Outlet } from 'react-router-dom';
import MobileTab from '../mobile/components/MobileTab';

export default function MobileLayout() {
  return (
    <div>
      <Outlet />
      <MobileTab />
    </div>
  );
}
