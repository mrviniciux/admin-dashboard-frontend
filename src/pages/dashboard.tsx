import BarChart from '@/components/Charts/BarChart/BarChart';
import LineChart from '@/components/Charts/LineChart';
import Template from '@/components/Template';
import { fetchSalesByYear, fetchSalesGraph } from '@/services/charts';
import { useQueries } from '@tanstack/react-query';

function Dashboard() {
  const [sales, salesByYear] = useQueries({
    queries: [
      {
        queryKey: ['sales-graph'],
        queryFn: fetchSalesGraph,
      },
      {
        queryKey: ['sales-by-year-graph'],
        queryFn: fetchSalesByYear,
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
    </Template>
  );
}

Dashboard.auth = true;

export default Dashboard;
