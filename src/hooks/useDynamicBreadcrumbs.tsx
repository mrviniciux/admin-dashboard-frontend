import { useActivePage } from '@toolpad/core/useActivePage';
import { Breadcrumb } from '@toolpad/core/PageContainer';
import invariant from 'invariant';

// Pass the id from your router of choice
export function useDynamicBreadcrumbs(id: string): Breadcrumb[] {
  const activePage = useActivePage();
  invariant(activePage, 'No navigation match');

  const title = `Item ${id}`;
  const path = `${activePage.path}/${id}`;

  const result = [...activePage.breadcrumbs];

  if (id) result.push({ title, path });

  return result;
}
