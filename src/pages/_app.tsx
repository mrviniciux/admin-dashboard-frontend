import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
}
