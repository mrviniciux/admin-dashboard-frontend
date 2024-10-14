'use client';
import Link from 'next/link';
import { LoaderContainerStyled } from './Loader.styled';
import { LoaderProps } from './Loader.types';

import {
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';

function Loader({
  type = 'circular',
  msg = '',
  showRefresh = false,
  fullScreen = false,
}: LoaderProps) {
  const DefaultLoader = () => (
    <Grid container direction={'column'} alignItems={'center'} width={'100vw'}>
      {type === 'linear' ? (
        <LinearProgress color="primary" style={{ width: '100%' }} />
      ) : (
        <CircularProgress color="primary" />
      )}
      <Typography paddingTop={2} variant="overline" display="block">
        {msg || 'Carregando...'}
      </Typography>
      {showRefresh && (
        <Typography variant="caption" display="block" gutterBottom>
          Demorando muito? Experimente{' '}
          <Link href={'/'}>recarregar a página.</Link>
        </Typography>
      )}
    </Grid>
  );

  if (fullScreen)
    return (
      <LoaderContainerStyled>
        <DefaultLoader />
      </LoaderContainerStyled>
    );

  return <DefaultLoader />;
}

export default Loader;
