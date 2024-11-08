import { createTheme } from '@mui/material';

export const API_URL = 'http://localhost:3000/api';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  palette: {
    mode: 'light',
    background: {
      default: '#eee',
    },
  },
});
