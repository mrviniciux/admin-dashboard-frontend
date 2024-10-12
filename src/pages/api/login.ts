// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  email: string;
  token: string;
  name: string;
  image: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { user } = req.body;
  if (req.method === 'POST') {
    res.status(200).json({
      id: '1',
      email: `asdf@gmail.com`,
      name: 'aaaaaaaaaaaaaaaaaaa',
      image: '/test.png',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJqb2duQGdtYWlsLmNvbSIsImltYWdlIjoiL3RlbmlzLnBuZyIsImFjY2Vzc1Rva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lJeE1qTTBOVFkzT0Rrd0lpd2libUZ0WlNJNklrcHZhRzRnUkc5bElpd2laVzFoYVd3aU9pSnFiMmR1UUdkdFlXbHNMbU52YlNJc0ltbHRZV2RsSWpvaUwzUmxibWx6TG5CdVp5SXNJbUZqWTJWemMxUnZhMlZ1SWpvaU1USXpORFUySWl3aWFXRjBJam94TlRFMk1qTTVNREl5ZlEuZF9UeXZGcTB5YXpUMWpKMHhtcDc0ZjNvazF3WDJDWkoySFQtZXlIQ3J1NCIsImlhdCI6MTUxNjIzOTAyMn0.GdTeoido2Y31dSzib5uDnhyQm1SsZCkdndxWouYzd-Y',
    });
  } else {
    res.status(404);
  }
}
