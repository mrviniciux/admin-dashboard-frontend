'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/config';
import { AppProvider } from '@toolpad/core/AppProvider';
import { NAVIGATION } from '@/config/navigation';
import Auth from './Auth';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

type AppPageProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: AppPageProps) {
  const queryClient = new QueryClient();
  return (
    <html lang="pt-BR">
      <head></head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProvider
            branding={{ title: 'admin-dashboard-frontend' }}
            navigation={NAVIGATION}
            theme={theme}
          >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <SessionProvider>
                <QueryClientProvider client={queryClient}>
                  <Auth>
                    <DashboardLayout>
                      <PageContainer maxWidth={false}>{children}</PageContainer>
                    </DashboardLayout>
                  </Auth>
                </QueryClientProvider>
              </SessionProvider>
            </ThemeProvider>
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
