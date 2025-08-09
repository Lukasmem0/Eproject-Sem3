import React from 'react';
import { Building, Users, MapPin, Phone } from 'lucide-react';
import { clients } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const Clients = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h1>
          <p className="text-xl text-blue-100">
            Trusted by 250+ corporate clients across India
          </p>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-gray-600">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24</div>
              <div className="text-gray-600">States Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Client Portfolio */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Portfolio</h2>
            <p className="text-gray-600 text-lg">
              {isAuthenticated 
                ? "Detailed information about our valued clients and services provided"
                : "Some of our valued clients across various industries"
              }
            </p>
          </div>

          {isAuthenticated ? (
            // Detailed client information for authenticated users
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {clients.map((client) => (
                <div key={client.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{client.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Services Provided:</h4>
                      <div className="flex flex-wrap gap-2">
                        {client.services.map((service, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-gray-500" />
                          <span className="text-gray-700">Staff Assigned</span>
                        </div>
                        <p className="font-semibold text-gray-900 ml-7">{client.staffAssigned}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-5 w-5 text-gray-500" />
                          <span className="text-gray-700">Contact Person</span>
                        </div>
                        <p className="font-semibold text-gray-900 ml-7">{client.contactPerson}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Public client showcase
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {clients.map((client) => (
                  <div key={client.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{client.name}</h3>
                    <p className="text-gray-600 text-sm">{client.location}</p>
                  </div>
                ))}
              </div>

              <div className="text-center bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Want to see more details?</h3>
                <p className="text-gray-600 mb-6">
                  Employee login provides access to detailed client information, services provided, and staff assignments.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Employee Login
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600">Comprehensive security solutions across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Banking & Finance',
              'Information Technology',
              'Manufacturing',
              'Retail & Malls',
              'Healthcare',
              'Education',
              'Hospitality',
              'Real Estate',
              'Government',
              'Aviation'
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-900 font-medium text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-gray-600">How we've helped our clients achieve their security goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Banking Security Excellence',
                description: '50+ bank branches secured with zero security incidents in the last 2 years',
                metric: '100%',
                metricLabel: 'Incident-free'
              },
              {
                title: 'IT Campus Protection',
                description: 'Comprehensive security for major IT parks covering 10,000+ employees',
                metric: '24/7',
                metricLabel: 'Coverage'
              },
              {
                title: 'Retail Chain Security',
                description: 'Multi-location retail security with integrated electronic systems',
                metric: '200+',
                metricLabel: 'Locations'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{story.metric}</div>
                  <div className="text-gray-600 text-sm">{story.metricLabel}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Client Family</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the Star Securities difference with our comprehensive security solutions
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Clients;