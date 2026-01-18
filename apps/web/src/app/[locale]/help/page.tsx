import { Help } from '@/components/help/help';
import { AppLayout } from '@/components/layout/app-layout';

export default function HelpPage() {
  return (
    <AppLayout currentPage="Help">
      <Help />
    </AppLayout>
  );
}
