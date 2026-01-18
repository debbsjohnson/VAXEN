import { Wallets } from '@/components/wallets/wallets';
import { AppLayout } from '@/components/layout/app-layout';

export default function WalletsPage() {
  return (
    <AppLayout currentPage="Wallets">
      <Wallets />
    </AppLayout>
  );
}
