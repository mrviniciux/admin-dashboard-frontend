// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  token: string;
  user: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { user } = req.body;
  if (req.method === 'POST') {
    res.status(200).json({ token: '12345678', user: user });
  } else {
    res.status(404);
  }
}
