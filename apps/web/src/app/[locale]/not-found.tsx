import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">404 - Page Not Found</h2>
        <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
        <Link
          href="/en/dashboard"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity inline-block"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

