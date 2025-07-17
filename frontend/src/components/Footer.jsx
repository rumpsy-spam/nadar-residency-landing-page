import React from 'react';
import { Button } from './ui/button';
import { 
  Phone, Mail, MapPin, Clock, Facebook, Twitter, 
  Instagram, Linkedin, Shield, Award, CreditCard, 
  Certificate, ArrowUp 
} from 'lucide-react';
import mockData from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {mockData.company.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for premium residential plots. We specialize in 
                providing legally compliant, well-located properties with modern amenities.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('plots')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Plot Details
              </button>
              <button 
                onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Amenities
              </button>
              <button 
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Location
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{mockData.company.phone}</p>
                  <p className="text-sm text-gray-400">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{mockData.company.email}</p>
                  <p className="text-sm text-gray-400">Quick response guaranteed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{mockData.company.address}</p>
                  <p className="text-sm text-gray-400">Visit us for consultation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-sm text-gray-400">Sunday: By appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Legal Compliance</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">Fully Registered</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">Freehold Property</span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">Bank Approved</span>
              </div>
              <div className="flex items-center space-x-3">
                <Certificate className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">RERA Approved</span>
              </div>
            </div>
            <div className="bg-green-900 p-4 rounded-lg">
              <p className="text-green-100 text-sm">
                All properties are legally verified and ready for immediate registration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {mockData.company.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Terms of Service
              </button>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;