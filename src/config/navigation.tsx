import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { Navigation } from '@toolpad/core';

export const getNavigation = (
  locale: string,
  translate: (_str: string) => string
) => {
  return [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      segment: `${locale}/dashboard`,
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      segment: `${locale}/orders`,
      title: translate('orders.title'),
      icon: <ShoppingCartIcon />,
    },
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Analytics',
    },
    {
      segment: 'reports',
      title: 'Reports',
      icon: <BarChartIcon />,
      children: [
        {
          segment: 'sales',
          title: 'Sales',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'traffic',
          title: 'Traffic',
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: 'integrations',
      title: 'Integrations',
      icon: <LayersIcon />,
    },
  ] as Navigation;
};
