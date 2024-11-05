import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartCard from '../ChartCard/ChartCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface BarChartProps {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const BarChart = ({ labels, datasets, title }: BarChartProps) => {
  //const labels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug'];
  //const datasets = [12, 45, 67, 43, 89, 34, 67, 43];
  const data = {
    labels: labels,
    datasets: datasets,
  };
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Quantidade',
        },
        display: true,
        beginAtZero: true,
        max: 300,
      },
      x: {
        title: {
          display: true,
          text: 'Mês',
        },
        display: true,
      },
    },
  };
  return (
    <ChartCard title={title}>
      <Bar data={data} options={options} />
    </ChartCard>
  );
};

export default BarChart;
