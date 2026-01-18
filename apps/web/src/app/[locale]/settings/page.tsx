import { Settings } from '@/components/settings/settings';
import { AppLayout } from '@/components/layout/app-layout';

export default function SettingsPage() {
  return (
    <AppLayout currentPage="Settings">
      <Settings />
    </AppLayout>
  );
}
