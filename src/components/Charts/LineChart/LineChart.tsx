import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartCard from '../ChartCard/ChartCard';

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension: number;
  }[];
}

const LineChart = ({ labels, datasets, title }: LineChartProps) => {
  // X - axis lable
  //const labels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug'];

  // Data want to show on chart
  //const datasets = [12, 45, 67, 43, 89, 34, 67, 43];
  const data = {
    labels,
    datasets,
  };

  // To make configuration
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Y-axis Lable',
        },
        display: true,
        min: 10,
      },
      x: {
        title: {
          display: true,
          text: 'x-axis Lable',
        },
        display: true,
      },
    },
  };

  return (
    <ChartCard title={title}>
      <Line data={data} options={options} />
    </ChartCard>
  );
};

export default LineChart;
