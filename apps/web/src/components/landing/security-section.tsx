import { Shield, FileText, Lock, Server } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Role-based access and approvals',
  },
  {
    icon: FileText,
    title: 'Audit-ready reporting',
  },
  {
    icon: Lock,
    title: 'Secure authentication and controls',
  },
  {
    icon: Server,
    title: 'Infrastructure designed for large transaction volumes',
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-16 leading-tight">
          Built for regulated, high-value environments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl border border-primary/20 transition-all duration-500 hover:border-primary/40 hover:scale-[1.02]"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  boxShadow: '0 0 20px rgba(12, 37, 115, 0.2), inset 0 0 20px rgba(12, 37, 115, 0.05)',
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

