import { Chat, Dashboard, Report } from '@mui/icons-material';
import { ReactNode } from 'react';

export type DrawerMenuItems = {
  name: string;
  icon: ReactNode;
  href: string;
};

export const items = [
  {
    name: 'Dashboard',
    icon: <Dashboard />,
    href: '/dashboard',
  },
  {
    name: 'Reports',
    icon: <Report />,
    href: '/reports',
  },
  {
    name: 'Chat',
    icon: <Chat />,
    href: '/chat',
  },
];
