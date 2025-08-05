'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/sections/SectionHeader';

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We provide expert guidance for university admissions, visa processing, and more.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can reach us via email or through the contact form on our website.',
  },
  {
    question: 'Do you offer scholarships?',
    answer: 'Yes, we assist in identifying and applying for scholarship opportunities.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-section-md">
            <SectionHeader
              heading="Frequently Asked Questions"
            />
      <div className="space-y-4 py-section">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border rounded-xl transition-all duration-300 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-4 py-4 font-medium text-gray-800 focus:outline-none focus:ring-0"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className="text-xl font-bold transition-transform duration-300">
                  {isOpen ? '–' : '+'}
                </span>
              </button>
              <div
                className={`px-4 text-gray-600 transition-all duration-300 ${
                  isOpen ? 'max-h-40 py-2' : 'max-h-0 overflow-hidden py-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
