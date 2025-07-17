import React from 'react';
import { Button } from './ui/button';
import { Phone, ArrowRight, MapPin, Shield, CheckCircle } from 'lucide-react';
import mockData from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={mockData.images.hero} 
          alt="Premium residential plots" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Residential Plots 125 & 150 Sq Yards in Prime Location
            <span className="block text-blue-400 mt-4">Starting ₹60,000/sq.yd</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 transform hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </Button>
            
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 transform hover:shadow-xl"
            >
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;