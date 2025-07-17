import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';
import mockData from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">
              {mockData.company.name}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('plots')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Plot Details
            </button>
            <button 
              onClick={() => scrollToSection('amenities')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('plots')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Plot Details
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Contact
              </button>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:scale-105 w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;