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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Residential Plots
            <span className="block text-blue-400">125 & 150 Sq Yards</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your Dream Home Awaits in a Gated Community with Modern Amenities
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
            <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-6 py-3 rounded-lg backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-lg">4KM from Aerocity</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-6 py-3 rounded-lg backdrop-blur-sm">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-lg">RERA Approved</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-6 py-3 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-lg">₹60,000/sq.yd</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 transform hover:shadow-xl"
            >
              <span>Book Site Visit</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 transform hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">125 Sq Yards</h3>
              <p className="text-3xl font-bold text-blue-400">₹75,00,000</p>
              <p className="text-gray-300 mt-2">45 Plots Available</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">150 Sq Yards</h3>
              <p className="text-3xl font-bold text-blue-400">₹90,00,000</p>
              <p className="text-gray-300 mt-2">32 Plots Available</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Special Offer</h3>
              <p className="text-3xl font-bold text-green-400">Register Now</p>
              <p className="text-gray-300 mt-2">Limited Time Deal</p>
            </div>
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