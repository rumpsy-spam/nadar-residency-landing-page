import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import mockData from '../data/mock';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plotSize: '',
    message: '',
    visitDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock successful submission
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
      variant: "default"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      plotSize: '',
      message: '',
      visitDate: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to secure your dream plot? Contact us today for site visit and detailed information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-green-400" />
                  <span>Call Us Now</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Speak directly with our property experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400 mb-4">
                  {mockData.company.phone}
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>Visit Our Office</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Come and see us for personalized consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-lg mb-4">
                  {mockData.company.address}
                </div>
                <div className="flex items-center space-x-2 text-blue-100">
                  <Clock className="w-4 h-4" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span>Email Us</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Send us your queries and requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-lg mb-4">
                  {mockData.company.email}
                </div>
                <p className="text-blue-100 text-sm">
                  We'll respond within 2 hours during business hours
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Book Your Site Visit
              </CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below and we'll arrange a personalized site visit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="plotSize">Preferred Plot Size</Label>
                    <Select
                      value={formData.plotSize}
                      onValueChange={(value) => handleSelectChange('plotSize', value)}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Select plot size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="125">125 sq yards</SelectItem>
                        <SelectItem value="150">150 sq yards</SelectItem>
                        <SelectItem value="both">Both options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="visitDate">Preferred Visit Date</Label>
                    <Input
                      id="visitDate"
                      name="visitDate"
                      type="date"
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any specific requirements or questions?"
                    rows={4}
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 transform"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Submit Inquiry</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Need Immediate Assistance?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 transform">
              <Phone className="w-5 h-5" />
              <span>Call {mockData.company.phone}</span>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 transform"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Schedule Site Visit</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;