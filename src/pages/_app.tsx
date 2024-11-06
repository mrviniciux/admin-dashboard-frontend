import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider, useSession } from 'next-auth/react';
import { NextComponentType } from 'next';
import { ReactNode } from 'react';
import Loader from '@/components/Loader';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/config';
import { useDemoRouter } from '@toolpad/core/internal';
import { AppProvider } from '@toolpad/core/AppProvider';
import { NAVIGATION } from '@/config/navigation';

type AppPageProps = AppProps & {
  Component: {
    auth: boolean;
  } & NextComponentType;
};

export default function App({ Component, pageProps }: AppPageProps) {
  const queryClient = new QueryClient();
  const router = useDemoRouter('/dashboard');
  return (
    <AppProvider
      branding={{ title: 'admin-dashboard-frontend' }}
      router={router}
      navigation={NAVIGATION}
      theme={theme}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={pageProps.session}>
          <QueryClientProvider client={queryClient}>
            {Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

function Auth({ children }: { children: ReactNode }) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <Loader type="linear" fullScreen />;
  }

  return children;
}
