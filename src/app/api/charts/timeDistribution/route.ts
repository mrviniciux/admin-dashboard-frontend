import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    labels: ['Trabalho', 'Lazer', 'Estudos', 'Exercício', 'Sono'],
    datasets: [
      {
        label: 'Distribuição do Tempo Diário',
        data: [8, 4, 2, 1, 9],
        backgroundColor: [
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });
}
