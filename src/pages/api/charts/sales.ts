// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension: number;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const { user } = req.body;
  if (req.method === 'GET') {
    res.status(200).json({
      labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      datasets: [
        {
          label: 'Vendas do Produto A',
          data: [
            1200, 1900, 3000, 5000, 4200, 7000, 8000, 6000, 9000, 12000, 15000,
            18000,
          ],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.1,
        },
        {
          label: 'Vendas do Produto B',
          data: [
            800, 1500, 2000, 2500, 3500, 3000, 6000, 5000, 7000, 9000, 11000,
            14000,
          ],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true,
          tension: 0.1,
        },
      ],
    });
  } else {
    res.status(404);
  }
}
