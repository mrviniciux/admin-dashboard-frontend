/* eslint-disable no-unused-vars */
import { createTheme, PaletteMode } from '@mui/material';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = () =>
  createTheme({
    palette: {
      mode: 'light',
    },
    status: {
      danger: orange[500],
    },
  });
