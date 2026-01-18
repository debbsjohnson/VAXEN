'use client';

import { useState, useEffect, useRef } from 'react';
import { Clock, TrendingDown, AlertCircle, ArrowRightLeft, Layers } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    text: 'Capital held in one currency while deals progress in another',
    gradient: 'from-[#0C2573] to-[#190326]',
    glow: 'rgba(12, 37, 115, 0.4)',
  },
  {
    icon: TrendingDown,
    text: 'FX volatility eroding margins between offer and completion',
    gradient: 'from-[#190326] to-[#BA0827]',
    glow: 'rgba(186, 8, 39, 0.4)',
  },
  {
    icon: AlertCircle,
    text: 'Banks forcing early or inefficient currency conversion',
    gradient: 'from-[#BA0827] to-[#49011E]',
    glow: 'rgba(186, 8, 39, 0.5)',
  },
  {
    icon: ArrowRightLeft,
    text: 'Slow international transfers delaying completions',
    gradient: 'from-[#0C2573] to-[#BA0827]',
    glow: 'rgba(12, 37, 115, 0.4)',
  },
  {
    icon: Layers,
    text: 'Fragmented accounts across countries, banks, and providers',
    gradient: 'from-[#190326] to-[#0C2573]',
    glow: 'rgba(12, 37, 115, 0.4)',
  },
];

export function ProblemSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items in sequence
            problems.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="product" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Futuristic animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div 
          className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(12, 37, 115, 0.6) 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(186, 8, 39, 0.6) 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
        
        {/* Holographic grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(12, 37, 115, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12, 37, 115, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 0',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Headline with futuristic effects */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            Cross-border property deals are{' '}
            <span className="relative inline-block">
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #0C2573 0%, #BA0827 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 8px rgba(12, 37, 115, 0.6))',
                  animation: 'gradientShift 3s ease-in-out infinite',
                }}
              >
                won or lost
              </span>
              <span 
                className="absolute -bottom-2 left-0 right-0 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, transparent, #0C2573, #BA0827, transparent)',
                  opacity: 0.6,
                  animation: 'pulse 2s ease-in-out infinite',
                  boxShadow: '0 0 10px rgba(12, 37, 115, 0.5)',
                }}
              />
            </span>
            {' '}on timing.
          </h2>
        </div>

        {/* Futuristic problem cards */}
        <div className="space-y-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                className={`
                  relative group
                  border border-primary/20 rounded-2xl
                  p-6 transition-all duration-700 ease-out
                  hover:border-primary/50 
                  hover:shadow-2xl
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                `}
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: isVisible 
                    ? `0 0 20px ${problem.glow}, inset 0 0 20px rgba(12, 37, 115, 0.1)` 
                    : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 40px ${problem.glow}, 0 0 80px ${problem.glow}40, inset 0 0 30px rgba(12, 37, 115, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = isVisible 
                    ? `0 0 20px ${problem.glow}, inset 0 0 20px rgba(12, 37, 115, 0.1)` 
                    : 'none';
                }}
              >
                {/* Animated gradient border */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${problem.gradient.split(' ')[1]}, ${problem.gradient.split(' ')[3]})`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                    animation: 'borderGlow 3s ease-in-out infinite',
                  }}
                />
                
                {/* Glowing left accent */}
                <div 
                  className={`
                    absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl
                    bg-gradient-to-b ${problem.gradient}
                    opacity-60 group-hover:opacity-100
                    transition-all duration-500
                    group-hover:w-2
                  `}
                  style={{
                    boxShadow: `0 0 20px ${problem.glow}, 0 0 40px ${problem.glow}60`,
                  }}
                />
                
                {/* Holographic shine effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shine 3s ease-in-out infinite',
                  }}
                />
                
                <div className="relative flex items-start gap-6 z-10">
                  {/* Futuristic icon container */}
                  <div className="relative flex-shrink-0">
                    {/* Outer glow ring */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, ${problem.glow} 0%, transparent 70%)`,
                        filter: 'blur(10px)',
                        transform: 'scale(1.5)',
                      }}
                    />
                    
                    {/* Icon container */}
                    <div 
                      className={`
                        relative w-16 h-16 rounded-xl
                        bg-gradient-to-br ${problem.gradient}
                        flex items-center justify-center
                        border-2 border-primary/30
                        group-hover:border-primary/60
                        transition-all duration-500
                        group-hover:scale-110 group-hover:rotate-3
                      `}
                      style={{
                        boxShadow: `0 0 20px ${problem.glow}, inset 0 0 20px rgba(255, 255, 255, 0.1)`,
                      }}
                    >
                      <Icon 
                        className="h-7 w-7 text-white relative z-10" 
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))',
                        }}
                      />
                      
                      {/* Inner glow */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${problem.glow} 0%, transparent 70%)`,
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Text content with futuristic styling */}
                  <div className="flex-1 pt-2">
                    <p 
                      className="text-xl text-foreground leading-relaxed font-medium"
                      style={{
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      {problem.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Futuristic closing statement */}
        <div className="relative">
          {/* Animated accent line */}
          <div 
            className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-20 rounded-full opacity-60"
            style={{
              background: 'linear-gradient(180deg, #4A90E2 0%, #9D4EDD 50%, #FF3366 100%)',
              boxShadow: '0 0 20px rgba(74, 144, 226, 0.6), 0 0 40px rgba(255, 51, 102, 0.4)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          
          <p 
            className="text-lg sm:text-xl text-foreground font-semibold leading-relaxed pl-8"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.05)',
            }}
          >
            These issues{' '}
            <span 
              className="relative"
              style={{
                background: 'linear-gradient(135deg, #4A90E2 0%, #9D4EDD 50%, #FF3366 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600',
              }}
            >
              increase cost
            </span>
            {', '}
            <span 
              className="relative"
              style={{
                background: 'linear-gradient(135deg, #4A90E2 0%, #9D4EDD 50%, #FF3366 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600',
              }}
            >
              cause delays
            </span>
            {', and lead to '}
            <span 
              className="relative"
              style={{
                background: 'linear-gradient(135deg, #4A90E2 0%, #9D4EDD 50%, #FF3366 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600',
              }}
            >
              missed deals
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

