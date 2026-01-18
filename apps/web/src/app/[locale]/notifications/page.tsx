import { Notifications } from '@/components/notifications/notifications';
import { AppLayout } from '@/components/layout/app-layout';

export default function NotificationsPage() {
  return (
    <AppLayout currentPage="Notifications">
      <Notifications />
    </AppLayout>
  );
}
