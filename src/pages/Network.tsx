import React from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { regionalOffices } from '../data/mockData';

const Network = () => {
  const regionColors = {
    'North Region': 'bg-blue-100 border-blue-500 text-blue-800',
    'West Region': 'bg-green-100 border-green-500 text-green-800',
    'East Region': 'bg-purple-100 border-purple-500 text-purple-800',
    'South Region': 'bg-orange-100 border-orange-500 text-orange-800'
  };

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Network</h1>
          <p className="text-xl text-blue-100">
            Nationwide presence across 24 states with regional expertise
          </p>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pan-India Coverage</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              With strategic regional offices across India, Star Securities ensures comprehensive coverage and localized service delivery to meet diverse client requirements.
            </p>
          </div>

          {/* Regional Offices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regionalOffices.map((office) => (
              <div 
                key={office.id} 
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`p-4 border-l-4 ${regionColors[office.region as keyof typeof regionColors]}`}>
                  <h3 className="text-xl font-bold mb-2">{office.region}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      <p className="text-gray-700">{office.contact}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      <p className="text-gray-700">{office.email}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">Contact Person</p>
                        <p className="text-gray-900 font-semibold">{office.contactPerson}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coverage Statistics</h2>
            <p className="text-gray-600">Our extensive network ensures nationwide reach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600">Regional Offices</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">250+</div>
              <div className="text-gray-600">Corporate Clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">2800+</div>
              <div className="text-gray-600">Personnel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Specializations</h2>
            <p className="text-gray-600">Each region brings unique expertise and local market knowledge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">North & West Regions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Banking & Financial Institutions</li>
                <li>• Corporate Headquarters Security</li>
                <li>• Industrial Complex Protection</li>
                <li>• High-Value Cash Transportation</li>
                <li>• Government Building Security</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">East & South Regions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• IT Parks & Tech Companies</li>
                <li>• Manufacturing Units</li>
                <li>• Port & Airport Security</li>
                <li>• Educational Institutions</li>
                <li>• Healthcare Facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Security Services in Your Region?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact your nearest regional office for personalized security solutions
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Find Your Regional Office
          </button>
        </div>
      </section>
    </div>
  );
};

export default Network;