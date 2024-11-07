import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import ClientLayout from './ClientLayout';
import { NextIntlClientProvider } from 'next-intl';

type AppPageProps = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: AppPageProps) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head></head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientLayout locale={locale}>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
