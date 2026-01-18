'use client';

import { useState } from 'react';
import { RequestAccessModal } from './request-access-modal';
import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
            Stop letting FX timing dictate your property deals.
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Vaxen Global gives property companies the control and flexibility needed to operate globally with confidence.
          </p>

          <button
            onClick={() => {
              setIsModalOpen(true);
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'cta_click_request_access', {
                  event_category: 'lead_generation',
                  event_label: 'final_cta',
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
      </section>

      <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

