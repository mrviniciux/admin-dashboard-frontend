'use client';

import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export default function Auth({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const protectedRoutes = ['/dashboard', '/profile'];

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session && protectedRoutes.includes(pathname)) {
    router.push('/api/auth/signin');
    return null;
  }

  return <>{children}</>;
}
