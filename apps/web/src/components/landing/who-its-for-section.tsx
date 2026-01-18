import { Check, X } from 'lucide-react';

export function WhoItsForSection() {
  const builtFor = [
    'Property investment firms',
    'Real estate developers',
    'Asset managers',
    'Property management companies',
    'Cross-border acquisition vehicles',
  ];

  const notFor = [
    'Individual buyers',
    'Hobby landlords',
    'One-off overseas purchases',
    'Consumer transfers',
  ];

  return (
    <section id="who-its-for" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-16 leading-tight">
          Built for property companies, not consumers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Built For */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Check className="h-8 w-8 text-primary" />
              Built for
            </h3>
            <ul className="space-y-4 mb-8">
              {builtFor.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-xl text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Typical regions:</p>
              <p className="text-lg text-muted-foreground">Europe • South America • Africa</p>
            </div>
          </div>

          {/* Not For */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <X className="h-8 w-8 text-primary" />
              Not for
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-xl text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

