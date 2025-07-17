import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Shield, Home, Navigation, Trees, Droplets, Zap, 
  Building, Eye, CheckCircle, Award, CreditCard, 
  Certificate, MapPin, Route, Building2
} from 'lucide-react';
import mockData from '../data/mock';

const Amenities = () => {
  const iconMap = {
    Shield, Home, Navigation, Trees, Droplets, Zap, 
    Building, Eye, CheckCircle, Award, CreditCard, 
    Certificate, MapPin, Route, Building2
  };

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : <Home className="w-8 h-8" />;
  };

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Amenities & Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience modern living with world-class amenities and infrastructure
          </p>
        </div>

        {/* Main Amenities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Community Amenities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.amenities.map((amenity) => (
              <Card key={amenity.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                      {getIcon(amenity.icon)}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {amenity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center">
                    {amenity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legal Compliance */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Legal Compliance & Approvals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.legalCompliance.map((item) => (
              <Card key={item.id} className="bg-gradient-to-br from-green-50 to-green-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-500 p-3 rounded-full text-white">
                      {getIcon(item.icon)}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location Advantages */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Strategic Location Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.locationAdvantages.map((advantage) => (
              <Card key={advantage.id} className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-500 p-4 rounded-full text-white">
                      {getIcon(advantage.icon)}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Visual Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img 
                src={mockData.images.gatedCommunity} 
                alt="Gated Community" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">Gated Community</h4>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img 
                src={mockData.images.premiumLiving} 
                alt="Premium Living" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">Premium Living</h4>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img 
                src={mockData.images.communityLayout} 
                alt="Community Layout" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">Community Layout</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;