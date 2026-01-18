'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Who is Vaxen Global for?",
    answer: "Property companies deploying capital across borders, typically operating in multiple jurisdictions.",
  },
  {
    question: "Do you support multiple currencies?",
    answer: "Yes. The platform is designed for multi-currency treasury management (exact currency list can be added later).",
  },
  {
    question: "Can my team access the account?",
    answer: "Yes. Role-based access and approvals support teams with internal controls.",
  },
  {
    question: "Is this a consumer money transfer app?",
    answer: "No. Vaxen is built for businesses managing high-value cross-border capital deployment.",
  },
  {
    question: "How do I get access?",
    answer: "Submit the Request Access form. We review fit and follow up.",
  },
  {
    question: "What regions do you support?",
    answer: "We currently support operations across Europe, South America, and Africa.",
  },
  {
    question: "How long does onboarding take?",
    answer: "Onboarding typically takes 2-4 weeks depending on compliance requirements and account setup.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-16 leading-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
              >
                <span className="font-bold text-xl text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

