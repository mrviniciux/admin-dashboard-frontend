import { Card, Typography } from '@mui/material';
import { ReactElement } from 'react';

function ChartCard({
  children,
  title,
}: {
  children: ReactElement;
  title: string;
}) {
  return (
    <Card>
      <Typography variant="h5" padding={3}>
        {title}
      </Typography>
      {children}
    </Card>
  );
}

export default ChartCard;
