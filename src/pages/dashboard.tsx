import Charts from '@/components/Charts';
import Template from '@/components/Template';
import {
  fetchSalesByYear,
  fetchSalesGraph,
  fetchTimeDistribution,
} from '@/services/charts';
import { Grid2 } from '@mui/material';
import { useQueries } from '@tanstack/react-query';

function Dashboard() {
  const sizes = { lg: 4 };
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
    <Template>
      <Grid2
        container
        width={'100%'}
        alignItems={'center'}
        spacing={4}
        justifyContent={'center'}
      >
        <Grid2
          style={{ position: 'relative', height: '40vh', width: '80vw' }}
          size={sizes}
        >
          <Charts type="line" {...sales} />
        </Grid2>
        <Grid2 size={sizes}>
          <Charts type="bar" {...salesByYear} />
        </Grid2>
        <Grid2 size={sizes}>
          <Charts type="pie" {...timeDistribution} />
        </Grid2>
      </Grid2>
    </Template>
  );
}

Dashboard.auth = true;

export default Dashboard;
