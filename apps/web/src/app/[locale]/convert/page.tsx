import { Convert } from '@/components/convert/convert';
import { AppLayout } from '@/components/layout/app-layout';

export default function ConvertPage() {
  return (
    <AppLayout currentPage="Convert">
      <Convert />
    </AppLayout>
  );
}
