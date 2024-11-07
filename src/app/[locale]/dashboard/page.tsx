'use client';
import Charts from '@/components/Charts';

import {
  fetchSalesByYear,
  fetchSalesGraph,
  fetchTimeDistribution,
} from '@/services/charts';
import { Grid2 } from '@mui/material';
import { useQueries } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

function Dashboard() {
  const translate = useTranslations();
  const sizes = { sm: 12, xs: 12, lg: 4 };
  const [sales, salesByYear, timeDistribution] = useQueries({
    queries: [
      {
        queryKey: ['sales-graph'],
        queryFn: fetchSalesGraph,
      },
      {
        queryKey: ['sales-by-year-graph'],
        queryFn: fetchSalesByYear,
      },
      {
        queryKey: ['time-distribution-graph'],
        queryFn: fetchTimeDistribution,
      },
    ],
  });

  return (
    <Grid2
      container
      width={'100%'}
      alignItems={'flex-start'}
      spacing={4}
      justifyContent={'center'}
    >
      <Grid2 size={sizes}>
        <Charts
          title={translate('dashboard.salesProduct')}
          type="line"
          {...sales}
        />
      </Grid2>
      <Grid2 size={sizes}>
        <Charts
          title={translate('dashboard.salesByYear')}
          type="bar"
          {...salesByYear}
        />
      </Grid2>
      <Grid2 size={sizes}>
        <Charts
          title={translate('dashboard.timeDistribution')}
          type="pie"
          {...timeDistribution}
        />
      </Grid2>
    </Grid2>
  );
}

export default Dashboard;
