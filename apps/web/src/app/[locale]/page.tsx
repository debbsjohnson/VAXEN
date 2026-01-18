import { redirect } from 'next/navigation';

export default function HomePage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  // Redirect to dashboard for now
  redirect(`/${locale}/dashboard`);
}
