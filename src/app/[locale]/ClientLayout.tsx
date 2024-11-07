'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/config';

import { AppProvider } from '@toolpad/core/AppProvider';
import { getNavigation } from '@/config/navigation';
import Auth from './Auth';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useTranslations } from 'next-intl';
import FooterMenu from '@/components/FooterMenu';

type ClientLayoutProps = {
  locale: string;
  children: ReactNode;
};

export default function ClientLayout({ locale, children }: ClientLayoutProps) {
  const queryClient = new QueryClient();
  const translate = useTranslations();
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <AppProvider
        branding={{ title: 'admin-dashboard-frontend' }}
        navigation={getNavigation(locale, translate)}
        theme={theme}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SessionProvider>
            <QueryClientProvider client={queryClient}>
              <Auth>
                <DashboardLayout slots={{ sidebarFooter: FooterMenu }}>
                  <PageContainer maxWidth={false}>{children}</PageContainer>
                </DashboardLayout>
              </Auth>
            </QueryClientProvider>
          </SessionProvider>
        </ThemeProvider>
      </AppProvider>
    </AppRouterCacheProvider>
  );
}
