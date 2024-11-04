import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider, useSession } from 'next-auth/react';
import { NextComponentType } from 'next';
import { ReactNode } from 'react';
import Loader from '@/components/Loader';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/config';

type AppPageProps = AppProps & {
  Component: {
    auth: boolean;
  } & NextComponentType;
};

export default function App({ Component, pageProps }: AppPageProps) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
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
  );
}

function Auth({ children }: { children: ReactNode }) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <Loader type="linear" fullScreen />;
  }

  return children;
}
