import { CircularProgress } from '@mui/material';
import { UseQueryResult } from '@tanstack/react-query';
import PieChart from './PieChart/PieChart';
import BarChart from './BarChart/BarChart';
import LineChart from './LineChart';

type ChartsProps = {
  type: 'line' | 'bar' | 'pie';
  title: string;
} & UseQueryResult<any, Error>;

function Charts({ type, data, isLoading, title }: ChartsProps) {
  if (isLoading) return <CircularProgress />;

  switch (type) {
    case 'line':
      return <LineChart title={title} {...data} />;
    case 'bar':
      return <BarChart title={title} {...data} />;
    case 'pie':
      return <PieChart title={title} {...data} />;
    default:
      return <p>Graph type {type} is invalid</p>;
  }
}

export default Charts;
