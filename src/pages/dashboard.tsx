import BarChart from '@/components/Charts/BarChart/BarChart';
import LineChart from '@/components/Charts/LineChart';
import PieChart from '@/components/Charts/PieChart/PieChart';
import Template from '@/components/Template';
import {
  fetchSalesByYear,
  fetchSalesGraph,
  fetchTimeDistribution,
} from '@/services/charts';
import { useQueries } from '@tanstack/react-query';

function Dashboard() {
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
      {sales.isPending ? <p>Loading</p> : <LineChart {...sales.data} />}
      {salesByYear.isPending ? (
        <p>Loading</p>
      ) : (
        <BarChart {...salesByYear.data} />
      )}
      {timeDistribution.isPending ? (
        <p>Loading</p>
      ) : (
        <PieChart {...timeDistribution.data} />
      )}
    </Template>
  );
}

Dashboard.auth = true;

export default Dashboard;
