import React from 'react';
import { MapPin, Calendar, Users, CheckCircle } from 'lucide-react';
import { vacancies } from '../data/mockData';

const Careers = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers with Star Securities</h1>
          <p className="text-xl text-blue-100">
            Join our team of security professionals and grow your career with us
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-gray-600 text-lg">
              Explore exciting career opportunities in the security industry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vacancies.filter(v => v.status === 'open').map((vacancy) => (
              <div key={vacancy.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{vacancy.position}</h3>
                    <p className="text-blue-600 font-medium">{vacancy.department}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Open
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">{vacancy.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Posted on {new Date(vacancy.postedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700">{vacancy.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {vacancy.requirements.map((req, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-gray-600">Benefits and opportunities that come with joining Star Securities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Growth',
                description: 'Comprehensive training programs and clear career advancement paths',
                icon: Users
              },
              {
                title: 'Competitive Benefits',
                description: 'Attractive salary packages, health insurance, and performance bonuses',
                icon: CheckCircle
              },
              {
                title: 'Industry Leader',
                description: 'Work with the pioneer in private security industry with ISO certification',
                icon: Users
              },
              {
                title: 'Nationwide Presence',
                description: 'Opportunities across 24 states with potential for relocation',
                icon: MapPin
              },
              {
                title: 'Training Excellence',
                description: 'World-class training facilities and continuous skill development',
                icon: Users
              },
              {
                title: 'Job Security',
                description: 'Stable employment with a company that has 25+ years of experience',
                icon: CheckCircle
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <benefit.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600">Simple steps to join our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Apply Online',
                description: 'Submit your application through our website'
              },
              {
                step: '2',
                title: 'Initial Screening',
                description: 'HR team reviews applications and conducts initial screening'
              },
              {
                step: '3',
                title: 'Interview Process',
                description: 'Technical and HR interviews with department heads'
              },
              {
                step: '4',
                title: 'Join Our Team',
                description: 'Complete documentation and begin your journey with us'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Careers */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join Star Securities and become part of India's leading security solutions provider
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              View All Jobs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;