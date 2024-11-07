'use client';

import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';

export default function Auth({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <Loader type="linear" fullScreen showRefresh />;
  }

  if (!session) {
    router.push('/api/auth/signin');
    return null;
  }

  return <>{children}</>;
}
