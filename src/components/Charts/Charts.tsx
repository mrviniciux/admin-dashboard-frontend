import { CircularProgress } from '@mui/material';
import { UseQueryResult } from '@tanstack/react-query';
import PieChart from './PieChart/PieChart';
import BarChart from './BarChart/BarChart';
import LineChart from './LineChart';

type ChartsProps = {
  type: 'line' | 'bar' | 'pie';
} & UseQueryResult<any, Error>;

function Charts({ type, data, isLoading }: ChartsProps) {
  if (isLoading) return <CircularProgress />;

  switch (type) {
    case 'line':
      return <LineChart {...data} />;
    case 'bar':
      return <BarChart {...data} />;
    case 'pie':
      return <PieChart {...data} />;
    default:
      return <p>Graph type {type} is invalid</p>;
  }
}

export default Charts;
