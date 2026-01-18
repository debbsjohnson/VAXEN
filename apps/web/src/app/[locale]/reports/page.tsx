import { Reports } from '@/components/reports/reports';
import { AppLayout } from '@/components/layout/app-layout';

export default function ReportsPage() {
  return (
    <AppLayout currentPage="Reports">
      <Reports />
    </AppLayout>
  );
}
