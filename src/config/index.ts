/* eslint-disable no-unused-vars */
import { createTheme, PaletteMode } from '@mui/material';

export const API_URL = 'http://localhost:3000/api';

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

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#eee',
    },
  },
});
