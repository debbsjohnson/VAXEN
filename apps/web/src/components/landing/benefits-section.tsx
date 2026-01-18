import { Clock, Zap, Shield, Eye, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Timing control',
    description: 'Convert when deals are ready, not when banks force it.',
  },
  {
    icon: Zap,
    title: 'Faster execution',
    description: 'Move funds efficiently when timelines shift.',
  },
  {
    icon: Shield,
    title: 'Margin protection',
    description: 'Reduce FX leakage from volatility and rushed conversions.',
  },
  {
    icon: Eye,
    title: 'Operational clarity',
    description: 'One treasury view, not fragmented accounts.',
  },
  {
    icon: Globe,
    title: 'Cross-border readiness',
    description: 'Deploy capital wherever opportunity appears next.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-16 leading-tight">
          Built for property companies operating globally
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

