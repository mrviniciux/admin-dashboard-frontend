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
        <LinearProgress style={{ width: '100%' }} />
      ) : (
        <CircularProgress />
      )}
      <Typography paddingTop={2} variant="overline" display="block">
        {msg || 'Carregando...'}
      </Typography>
      {showRefresh && (
        <Typography variant="caption" display="block" gutterBottom>
          Demorando muito? Experimente <a href="/">recarregar a página.</a>
        </Typography>
      )}
    </Grid>
  );

  if (fullScreen)
    return (
      <div id="global-loader">
        <DefaultLoader />
      </div>
    );

  return <DefaultLoader />;
}

export default Loader;
