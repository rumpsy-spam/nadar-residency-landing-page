import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle, Home, Calculator, Phone } from 'lucide-react';
import mockData from '../data/mock';

const PlotDetails = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plots" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium residential plots in a gated community with modern amenities and excellent connectivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mockData.plots.map((plot) => (
            <Card key={plot.id} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                      <Home className="w-6 h-6" />
                      <span>{plot.size}</span>
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-lg">
                      Premium Residential Plot
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
                    {plot.availableUnits} Available
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 mb-2">Total Price</p>
                      <p className="text-4xl font-bold text-blue-600">{plot.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 mb-2">Per Sq Yard</p>
                      <p className="text-2xl font-bold text-green-600">{plot.pricePerSqYard}</p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                      <Calculator className="w-5 h-5 text-blue-600" />
                      <span>What You Get</span>
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Fully registered plot with clear title</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Ready for immediate construction</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">All utilities connected (electricity, water, sewage)</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Access to community amenities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
                    <Button 
                      onClick={scrollToContact}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 transform"
                    >
                      <span>Book Now</span>
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 transform"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call for Details</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Easy Payment Plans Available
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
              <div className="text-gray-700">Booking Amount</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-700">On Registration</div>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">50%</div>
              <div className="text-gray-700">On Possession</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlotDetails;