import React from 'react';
import { Shield, DollarSign, Users, Monitor, CheckCircle } from 'lucide-react';
import { services } from '../data/mockData';

const Business = () => {
  const serviceIcons = {
    'Manned Guarding': Shield,
    'Cash Services': DollarSign,
    'Recruitment and Training': Users,
    'Electronic Security Systems': Monitor
  };

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Business</h1>
          <p className="text-xl text-blue-100">
            Comprehensive security solutions across multiple divisions
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Divisions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Star Securities operates through four specialized divisions, each delivering excellence in their respective domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons];
              return (
                <div key={service.id} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-blue-600 font-medium">{service.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Service Details</h2>

          {/* Manned Guarding */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Manned Guarding Services</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our manned guarding division provides comprehensive security personnel services for various sectors including industries, banks, retail outlets, residential colonies, hotels, and institutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Security Guards</h4>
                  <p className="text-gray-600 text-sm">Professional security personnel for 24/7 protection</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Fire Squad</h4>
                  <p className="text-gray-600 text-sm">Specialized fire safety and emergency response teams</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Dog Squad</h4>
                  <p className="text-gray-600 text-sm">Trained security dogs for enhanced protection</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Bodyguards</h4>
                  <p className="text-gray-600 text-sm">Elite protection services for VIPs and executives</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cash Services */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Cash Services Division</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our Cash Services division specializes in the secure transportation and management of cash and valuables with state-of-the-art security protocols.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cash Transfer</h4>
                  <p className="text-gray-600 text-sm">Secured transportation of cash and valuables</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">ATM Replenishment</h4>
                  <p className="text-gray-600 text-sm">Professional ATM cash loading and maintenance</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Vaulting Services</h4>
                  <p className="text-gray-600 text-sm">Secure storage and processing of cash</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Collection Services</h4>
                  <p className="text-gray-600 text-sm">Multi-point cash collection and caretaker services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Electronic Security Systems */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Monitor className="h-12 w-12 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Electronic Security Systems</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Working with strategic partners and reputed system integrators, our ESS division provides cutting-edge electronic security solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">CCTV Systems</h4>
                  <p className="text-gray-600 text-sm">Advanced surveillance and monitoring systems</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Access Control</h4>
                  <p className="text-gray-600 text-sm">Biometric and card-based access management</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Fire Alarms</h4>
                  <p className="text-gray-600 text-sm">Fire detection and suppression systems</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Intrusion Detection</h4>
                  <p className="text-gray-600 text-sm">Perimeter protection and burglar alarm systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recruitment and Training */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Recruitment & Training Division</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our recruitment and training division ensures we deliver the best-qualified and well-trained manpower to meet diverse security requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Security Training</h4>
                  <p className="text-gray-600 text-sm">Comprehensive security protocols and procedures</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Personnel Recruitment</h4>
                  <p className="text-gray-600 text-sm">Careful selection and screening of candidates</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Skill Development</h4>
                  <p className="text-gray-600 text-sm">Continuous improvement and skill enhancement</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Certification</h4>
                  <p className="text-gray-600 text-sm">Industry-recognized training certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;