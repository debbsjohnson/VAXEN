import { Wallet, Globe, ArrowLeftRight, Rocket } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Wallet,
    title: 'Centralise capital',
    description: 'Centralise capital into a multi-currency treasury',
  },
  {
    number: '2',
    icon: Globe,
    title: 'Manage balances',
    description: 'Manage balances across jurisdictions from one dashboard',
  },
  {
    number: '3',
    icon: ArrowLeftRight,
    title: 'Convert strategically',
    description: 'Convert currencies strategically based on deal timelines',
  },
  {
    number: '4',
    icon: Rocket,
    title: 'Deploy funds',
    description: 'Deploy funds for acquisitions and operating expenses',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-16 leading-tight">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    {step.number}
                  </div>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

