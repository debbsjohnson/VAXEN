'use client';

import { RequestAccessModal } from './request-access-modal';
import { useState, useEffect } from 'react';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [showGradient, setShowGradient] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const lines = [
    'The Future',
    'Of Cross-Border',
    'Treasury Is Strategic'
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    const typingSpeed = 80; // milliseconds per character

    const typeNextChar = () => {
      if (currentLine < lines.length) {
        const line = lines[currentLine];
        if (currentChar < line.length) {
          const textSoFar = lines.slice(0, currentLine).join('\n') + 
                          (currentLine > 0 ? '\n' : '') + 
                          line.substring(0, currentChar + 1);
          setDisplayedText(textSoFar);
          currentChar++;
          setTimeout(typeNextChar, typingSpeed);
        } else {
          // Move to next line
          if (currentLine < lines.length - 1) {
            const textSoFar = lines.slice(0, currentLine + 1).join('\n');
            setDisplayedText(textSoFar);
            currentLine++;
            currentChar = 0;
            setTimeout(typeNextChar, typingSpeed * 2); // Slight pause between lines
          } else {
            // Typing complete
            setIsTyping(false);
            // Show gradient after a brief pause
            setTimeout(() => {
              setShowGradient(true);
              // After 2 seconds, change back to white
              setTimeout(() => {
                setShowGradient(false);
              }, 2000);
            }, 500);
          }
        }
      }
    };

    // Start typing after a brief delay
    setTimeout(typeNextChar, 300);
  }, []);

  const displayedLines = displayedText.split('\n');

  return (
    <>
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 h-screen flex items-center overflow-hidden">
        {/* Background Image - Abstract Gradient Ribbon */}
        <div className="absolute inset-0 z-0 bg-background">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url(/assets/patterns/gradient-ribbon.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(8px) contrast(1.1) brightness(1.05)',
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center">
            <h1 
              className="hero-title font-bold mb-8 leading-tight text-foreground"
              style={{
                textShadow: '0 0 20px rgba(12, 37, 115, 0.3), 0 0 40px rgba(12, 37, 115, 0.2)',
                animation: 'fadeInUp 0.6s ease-out',
                letterSpacing: '0.02em',
                whiteSpace: 'pre-wrap',
              }}
            >
              {lines.map((line, lineIndex) => {
                const displayedLine = displayedLines[lineIndex] || '';
                const isComplete = displayedLine.length >= line.length;
                
                // If line is complete, show it fully with futuristic effects
                if (isComplete) {
                  return (
                    <span 
                      key={lineIndex}
                      style={{
                        animation: `fadeInUp 0.4s ease-out ${lineIndex * 0.1}s both`,
                      }}
                    >
                      {line.split(' ').map((word, wordIndex, words) => {
                        const isStrategic = word === 'Strategic';
                        
                        if (isStrategic && !isTyping) {
                          if (showGradient) {
                            // Bright gradient matching solution section
                            return (
                              <span key={wordIndex}>
                                <span 
                                  style={{
                                    background: 'linear-gradient(135deg, #FF3366 0%, #9D4EDD 50%, #4A90E2 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    transition: 'all 0.3s ease',
                                  }}
                                >
                                  {word}
                                </span>
                                {wordIndex < words.length - 1 && ' '}
                              </span>
                            );
                          } else {
                            return (
                              <span key={wordIndex}>
                                <span 
                                  className="text-foreground"
                                  style={{
                                    transition: 'all 0.3s ease',
                                  }}
                                >
                                  {word}
                                </span>
                                {wordIndex < words.length - 1 && ' '}
                              </span>
                            );
                          }
                        }
                        
                        return (
                          <span key={wordIndex}>
                            <span 
                              className="text-foreground"
                              style={{
                                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))',
                              }}
                            >
                              {word}
                            </span>
                            {wordIndex < words.length - 1 && ' '}
                          </span>
                        );
                      })}
                      {lineIndex < lines.length - 1 && '\n'}
                    </span>
                  );
                }
                
                // If line is being typed, show what's been typed so far with glow
                return (
                  <span 
                    key={lineIndex}
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(12, 37, 115, 0.4))',
                    }}
                  >
                    {displayedLine}
                    {lineIndex < lines.length - 1 && '\n'}
                  </span>
                );
              })}
              {isTyping && (
                <span 
                  className="inline-block w-1 h-[1em] bg-primary ml-1"
                  style={{
                    animation: 'cursorBlink 1s infinite',
                    filter: 'drop-shadow(0 0 8px rgba(12, 37, 115, 0.8))',
                    boxShadow: '0 0 10px rgba(12, 37, 115, 0.6)',
                  }}
                >
                  |
                </span>
              )}
            </h1>
            
                  <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We help you hold, manage, and deploy capital across Europe, South America, and Africa without being forced to convert currencies at the wrong time.
            </p>

            <button
              onClick={() => {
                setIsModalOpen(true);
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'cta_click_request_access', {
                    event_category: 'lead_generation',
                    event_label: 'hero',
                  });
                }
              }}
              className="px-10 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(12, 37, 115, 0.25) 0%, rgba(186, 8, 39, 0.25) 100%)',
                backdropFilter: 'blur(30px) saturate(200%)',
                WebkitBackdropFilter: 'blur(30px) saturate(200%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(12, 37, 115, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
              }}
            >
              Request Access
            </button>
          </div>
        </div>
      </section>

      <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
