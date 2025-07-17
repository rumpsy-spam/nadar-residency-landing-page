import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Star, Quote } from 'lucide-react';
import mockData from '../data/mock';

const Testimonials = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from satisfied customers who chose their dream plots with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockData.testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Quote className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex justify-center mb-3">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 text-center mb-6 text-lg leading-relaxed">
                  "{testimonial.comment}"
                </CardDescription>
                <div className="text-center">
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </CardTitle>
                  <p className="text-blue-600 font-medium">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Statistics */}
        <div className="mt-16 bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Our Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
              <div className="text-gray-700">Plots Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700">Legal Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;