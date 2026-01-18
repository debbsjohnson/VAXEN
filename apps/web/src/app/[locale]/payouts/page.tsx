import { Payouts } from '@/components/payouts/payouts';
import { AppLayout } from '@/components/layout/app-layout';

export default function PayoutsPage() {
  return (
    <AppLayout currentPage="Payouts">
      <Payouts />
    </AppLayout>
  );
}
