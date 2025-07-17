import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { MapPin, Route, Building2, Clock, Car, Plane } from 'lucide-react';
import mockData from '../data/mock';

const LocationAdvantages = () => {
  const additionalFeatures = [
    {
      id: 1,
      title: "IT Hub Connectivity",
      description: "Direct access to major IT companies and tech parks",
      icon: "Building2",
      time: "15 mins"
    },
    {
      id: 2,
      title: "Airport Proximity",
      description: "Close to airport for easy travel",
      icon: "Plane",
      time: "20 mins"
    },
    {
      id: 3,
      title: "Highway Access",
      description: "Quick access to national highways",
      icon: "Car",
      time: "5 mins"
    }
  ];

  const iconMap = {
    MapPin, Route, Building2, Clock, Car, Plane
  };

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : <MapPin className="w-8 h-8" />;
  };

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prime Location Advantages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located for maximum convenience and future growth potential
          </p>
        </div>

        {/* Location Image */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src={mockData.images.locationAdvantage} 
              alt="Location Advantage" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Perfect Location</h3>
                <p className="text-lg">Where convenience meets opportunity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Location Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mockData.locationAdvantages.map((advantage) => (
            <Card key={advantage.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full text-white">
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

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {additionalFeatures.map((feature) => (
            <Card key={feature.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full text-white">
                    {getIcon(feature.icon)}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mt-2">
                  {feature.time}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Why This Location is Perfect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Time Savings</h4>
                  <p className="text-gray-600">Reduce daily commute time significantly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Future Growth</h4>
                  <p className="text-gray-600">Rapid infrastructure development planned</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Car className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Easy Accessibility</h4>
                  <p className="text-gray-600">Multiple transportation options available</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Plane className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Connectivity</h4>
                  <p className="text-gray-600">Near international airport and business hubs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <Route className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Smart Infrastructure</h4>
                  <p className="text-gray-600">Modern road network and utilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Strategic Position</h4>
                  <p className="text-gray-600">Heart of developing urban corridor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantages;