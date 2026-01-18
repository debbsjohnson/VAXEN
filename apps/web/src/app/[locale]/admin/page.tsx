import { Admin } from '@/components/admin/admin';
import { AppLayout } from '@/components/layout/app-layout';

export default function AdminPage() {
  return (
    <AppLayout currentPage="Admin">
      <Admin />
    </AppLayout>
  );
}
