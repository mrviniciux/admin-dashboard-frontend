// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string[];
    backgroundColor: string[];
    borderWidth: number;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const { user } = req.body;
  if (req.method === 'GET') {
    res.status(200).json({
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
  } else {
    res.status(404);
  }
}
