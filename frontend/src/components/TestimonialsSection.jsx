import React, { useState } from 'react';
import { testimonials } from '../data/mockData';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">TESTIMONIAL</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-lg">
            <div className="flex flex-col items-center">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-amber-500"
              />
              <div className="flex mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 text-center text-lg leading-relaxed mb-6">
                "{currentTestimonial.review}"
              </p>
              <h4 className="text-xl font-semibold text-gray-800">{currentTestimonial.name}</h4>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;