import React from 'react';
import { faqs } from '../data/mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">FAQ</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-amber-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;