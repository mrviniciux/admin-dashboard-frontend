import React from 'react';
import {
  Chart,
  Tooltip,
  Legend,
  TooltipItem,
  ArcElement,
  registerables,
} from 'chart.js';
import { PieChartStyled } from './PieChart.styled';

Chart.register(...registerables);
Chart.register(ArcElement, Tooltip, Legend); // Registrar os elementos necessários

interface PieChartProps {
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

interface PieChartOptions {
  responsive: boolean;
  plugins: {
    legend: {
      display: boolean;
      position: 'top' | 'bottom' | 'left' | 'right';
      labels: {
        color: string;
        font: {
          size: number;
          family: string;
        };
      };
    };
    tooltip: {
      callbacks: {
        // eslint-disable-next-line no-unused-vars
        label: (tooltipItem: TooltipItem<'pie'>) => string;
      };
    };
  };
  cutout: string;
  elements: {
    arc: {
      borderWidth: number;
    };
  };
}

const PieChart = ({ labels, datasets }: PieChartProps) => {
  // X - axis lable
  //const labels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug'];

  // Data want to show on chart
  //const datasets = [12, 45, 67, 43, 89, 34, 67, 43];

  const data = {
    labels,
    datasets,
  };
  const options: PieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'rgba(0, 0, 0, 0.87)',
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ${value} horas`;
          },
        },
      },
    },
    cutout: '50%',
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
  };

  return <PieChartStyled data={data} options={options} />;
};

export default PieChart;
