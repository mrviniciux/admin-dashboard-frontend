import BarChart from '@/components/Charts/BarChart/BarChart';
import LineChart from '@/components/Charts/LineChart';
import Template from '@/components/Template';

function Dashboard() {
  return (
    <Template>
      <LineChart />
      <BarChart />
    </Template>
  );
}

Dashboard.auth = true;

export default Dashboard;
