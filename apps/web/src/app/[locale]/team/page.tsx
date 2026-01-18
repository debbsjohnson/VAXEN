import { Team } from '@/components/team/team';
import { AppLayout } from '@/components/layout/app-layout';

export default function TeamPage() {
  return (
    <AppLayout currentPage="Team">
      <Team />
    </AppLayout>
  );
}
