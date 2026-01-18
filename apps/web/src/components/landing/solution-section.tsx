'use client';

import { useState, useEffect, useRef } from 'react';
import { Wallet, Globe, ArrowRightLeft, Zap, Eye } from 'lucide-react';

const solutions = [
  {
    icon: Wallet,
    text: 'Hold and manage balances across major currencies',
    gradient: 'from-[#0C2573] to-[#190326]',
    position: 'top-left',
  },
  {
    icon: ArrowRightLeft,
    text: 'Convert funds strategically based on deal timing',
    gradient: 'from-[#190326] to-[#BA0827]',
    position: 'top-right',
  },
  {
    icon: Zap,
    text: 'Move capital quickly when completions happen',
    gradient: 'from-[#BA0827] to-[#49011E]',
    position: 'center',
  },
  {
    icon: Globe,
    text: 'Centralise treasury operations across regions',
    gradient: 'from-[#0C2573] to-[#BA0827]',
    position: 'bottom-left',
  },
  {
    icon: Eye,
    text: 'Maintain a clear, auditable view of financial position',
    gradient: 'from-[#190326] to-[#0C2573]',
    position: 'bottom-right',
  },
];

export function SolutionSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            solutions.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
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
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Elite futuristic background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(74, 144, 226, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(255, 51, 102, 0.15) 0%, transparent 50%)',
          }}
        />

        {/* Animated gradient orbs - multiple layers */}
        <div 
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(74, 144, 226, 0.6) 0%, rgba(157, 78, 221, 0.4) 30%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float 40s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 51, 102, 0.6) 0%, rgba(157, 78, 221, 0.4) 30%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float 50s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(157, 78, 221, 0.5) 0%, rgba(74, 144, 226, 0.3) 40%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'pulse 16s ease-in-out infinite',
          }}
        />

        {/* Elite holographic grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(74, 144, 226, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74, 144, 226, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(157, 78, 221, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(157, 78, 221, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
            backgroundPosition: '0 0, 0 0, 0 0, 0 0',
            animation: 'gridMove 80s linear infinite',
          }}
        />

        {/* Animated circuit lines */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(74, 144, 226, 0.3) 10px, rgba(74, 144, 226, 0.3) 11px),
              repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255, 51, 102, 0.3) 10px, rgba(255, 51, 102, 0.3) 11px)
            `,
            backgroundSize: '200px 200px',
            animation: 'gridMove 120s linear infinite reverse',
          }}
        />

        {/* Floating light particles */}
        <div 
          className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(74, 144, 226, 1) 0%, transparent 70%)',
            boxShadow: '0 0 20px rgba(74, 144, 226, 0.8), 0 0 40px rgba(74, 144, 226, 0.4)',
            animation: 'float 30s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(255, 51, 102, 1) 0%, transparent 70%)',
            boxShadow: '0 0 20px rgba(255, 51, 102, 0.8), 0 0 40px rgba(255, 51, 102, 0.4)',
            animation: 'float 36s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(157, 78, 221, 1) 0%, transparent 70%)',
            boxShadow: '0 0 15px rgba(157, 78, 221, 0.8), 0 0 30px rgba(157, 78, 221, 0.4)',
            animation: 'float 24s ease-in-out infinite',
          }}
        />

        {/* Animated geometric shapes */}
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 opacity-10"
          style={{
            background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.4) 0%, rgba(157, 78, 221, 0.4) 50%, rgba(255, 51, 102, 0.4) 100%)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(20px)',
            animation: 'float 44s ease-in-out infinite',
            transform: 'rotate(45deg)',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-40 h-40 opacity-10"
          style={{
            background: 'linear-gradient(45deg, rgba(255, 51, 102, 0.4) 0%, rgba(157, 78, 221, 0.4) 50%, rgba(74, 144, 226, 0.4) 100%)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            filter: 'blur(25px)',
            animation: 'float 56s ease-in-out infinite reverse',
            transform: 'rotate(-30deg)',
          }}
        />

        {/* Depth layers with different blur intensities */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 51, 102, 0.3) 0%, transparent 50%)',
            filter: 'blur(120px)',
          }}
        />

        {/* Animated plane moving across (left to right) */}
        <svg
          className="absolute top-1/4 w-12 h-12 opacity-40"
          style={{
            animation: 'planeMove 25s linear infinite',
            filter: 'drop-shadow(0 0 10px rgba(74, 144, 226, 0.6))',
            transform: 'rotate(90deg)',
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            stroke="rgba(74, 144, 226, 0.8)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(74, 144, 226, 0.2)"
          />
        </svg>

        {/* Second plane moving in opposite direction (right to left) */}
        <svg
          className="absolute bottom-1/4 w-10 h-10 opacity-30"
          style={{
            animation: 'planeMoveReverse 30s linear infinite',
            filter: 'drop-shadow(0 0 10px rgba(255, 51, 102, 0.6))',
            transform: 'rotate(-90deg)',
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            stroke="rgba(255, 51, 102, 0.8)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(255, 51, 102, 0.2)"
          />
        </svg>

        {/* Radar sweep lines */}
        <div
          className="absolute top-1/2 left-0 w-full h-1 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(74, 144, 226, 0.6) 50%, transparent 100%)',
            transformOrigin: 'left center',
            animation: 'radarSweep 8s linear infinite',
            filter: 'blur(2px)',
          }}
        />
        <div
          className="absolute top-1/3 left-0 w-full h-1 opacity-15"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(157, 78, 221, 0.6) 50%, transparent 100%)',
            transformOrigin: 'left center',
            animation: 'radarSweep 10s linear infinite',
            filter: 'blur(2px)',
          }}
        />
        <div
          className="absolute bottom-1/3 left-0 w-full h-1 opacity-15"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 51, 102, 0.6) 50%, transparent 100%)',
            transformOrigin: 'left center',
            animation: 'radarSweep 12s linear infinite',
            filter: 'blur(2px)',
          }}
        />

        {/* Radar circles expanding */}
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full border opacity-10"
          style={{
            borderColor: 'rgba(74, 144, 226, 0.4)',
            borderWidth: '2px',
            animation: 'radarPulse 4s ease-out infinite',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-24 h-24 rounded-full border opacity-10"
          style={{
            borderColor: 'rgba(255, 51, 102, 0.4)',
            borderWidth: '2px',
            animation: 'radarPulse 5s ease-out infinite',
            transform: 'translate(-50%, -50%)',
            animationDelay: '1s',
          }}
        />

        {/* Radar grid lines */}
        <div
          className="absolute top-1/2 left-0 w-full h-px opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(74, 144, 226, 0.3) 20%, rgba(74, 144, 226, 0.3) 80%, transparent 100%)',
            animation: 'radarGridMove 6s linear infinite',
          }}
        />
        <div
          className="absolute top-1/3 left-0 w-full h-px opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(157, 78, 221, 0.3) 20%, rgba(157, 78, 221, 0.3) 80%, transparent 100%)',
            animation: 'radarGridMove 8s linear infinite',
          }}
        />
        <div
          className="absolute bottom-1/3 left-0 w-full h-px opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 51, 102, 0.3) 20%, rgba(255, 51, 102, 0.3) 80%, transparent 100%)',
            animation: 'radarGridMove 10s linear infinite',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Futuristic headline with horizontal design */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            One treasury.{' '}
            <span className="relative inline-block">
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #FF3366 0%, #9D4EDD 50%, #4A90E2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Multiple countries.
              </span>
              <span 
                className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full opacity-60"
                style={{
                  background: 'linear-gradient(90deg, #FF3366, #9D4EDD, #4A90E2)',
                  boxShadow: '0 0 10px rgba(255, 51, 102, 0.5)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
            </span>
            {' '}Full control.
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Vaxen Global provides property companies with a unified treasury platform designed for cross-border operations.
          </p>
        </div>

        {/* Horizontal card layout with glass effect */}
        <div className="relative">
          {/* Horizontal scrolling container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const isVisible = visibleItems.includes(index);
                const isHovered = hoveredIndex === index;
                
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.95)',
                      transition: `all 0.8s ease-out ${index * 0.15}s`,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Glass effect card */}
                    <div
                      className={`
                        relative p-8 rounded-2xl
                        border border-primary/20
                        transition-all duration-500
                        cursor-pointer
                        ${isHovered ? 'border-primary/50 scale-105' : ''}
                      `}
                      style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        boxShadow: isHovered
                          ? `0 0 40px ${solution.gradient.includes('#0C2573') ? 'rgba(12, 37, 115, 0.5)' : 'rgba(186, 8, 39, 0.5)'}, inset 0 0 30px rgba(12, 37, 115, 0.1)`
                          : '0 0 20px rgba(12, 37, 115, 0.2), inset 0 0 20px rgba(12, 37, 115, 0.05)',
                      }}
                    >
                      {/* Gradient accent border on hover */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${solution.gradient.split(' ')[1]}, ${solution.gradient.split(' ')[3]})`,
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                          padding: '1px',
                          opacity: isHovered ? 0.4 : 0,
                        }}
                      />

                      {/* Icon with glass effect */}
                      <div className="relative mb-6 flex justify-center">
                        <div
                          className={`
                            w-16 h-16 rounded-xl
                            flex items-center justify-center
                            border border-primary/30
                            transition-all duration-500
                            ${isHovered ? 'scale-110 rotate-3 border-primary/60' : ''}
                          `}
                          style={{
                            background: `linear-gradient(135deg, ${solution.gradient.split(' ')[1]}40, ${solution.gradient.split(' ')[3]}40)`,
                            backdropFilter: 'blur(10px)',
                            boxShadow: `0 0 20px ${solution.gradient.includes('#0C2573') ? 'rgba(12, 37, 115, 0.4)' : 'rgba(186, 8, 39, 0.4)'}`,
                          }}
                        >
                          <Icon 
                            className="h-8 w-8 text-white relative z-10" 
                            style={{
                              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))',
                            }}
                          />
                        </div>
                      </div>

                      {/* Text */}
                      <p className="text-base text-foreground leading-relaxed text-center font-medium">
                        {solution.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

