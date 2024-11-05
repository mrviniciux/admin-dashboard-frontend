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
    <Template>
      <Grid2
        container
        width={'100%'}
        alignItems={'flex-start'}
        spacing={4}
        justifyContent={'center'}
      >
        <Grid2 size={sizes}>
          <Charts title="Vendas por produto" type="line" {...sales} />
        </Grid2>
        <Grid2 size={sizes}>
          <Charts title="Vendas por ano" type="bar" {...salesByYear} />
        </Grid2>
        <Grid2 size={sizes}>
          <Charts
            title="Distribuição do tempo"
            type="pie"
            {...timeDistribution}
          />
        </Grid2>
      </Grid2>
    </Template>
  );
}

Dashboard.auth = true;

export default Dashboard;
