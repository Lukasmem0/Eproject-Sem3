import React from 'react';
import { Calendar, Award, Users, Globe } from 'lucide-react';
import { chairmanProfile, boardMembers, companyHistory } from '../data/mockData';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Star Securities</h1>
          <p className="text-xl text-blue-100">
            Pioneer in Private Security Industry since 2000
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-gray-600 text-lg mb-6">
                {companyHistory.overview}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Founded</div>
                  <div className="text-gray-600">{companyHistory.founded}</div>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">ISO Certified</div>
                  <div className="text-gray-600">9001:2000</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Company Building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Journey</h3>
            <div className="space-y-8">
              {companyHistory.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-gray-800 font-medium">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Profile */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Chairman's Profile</h2>
            <p className="text-gray-600">Leadership with vision and integrity</p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{chairmanProfile.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">{chairmanProfile.position}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">{chairmanProfile.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">{chairmanProfile.education}</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic text-lg border-l-4 border-blue-600 pl-6">
                  "{chairmanProfile.message}"
                </blockquote>
              </div>
              <div className="relative">
                <img
                  src={chairmanProfile.image}
                  alt={chairmanProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-gray-600">Experienced professionals leading our organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                <p className="text-gray-600 text-sm">{member.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'Absolute honesty and transparency in all our operations'
              },
              {
                title: 'Excellence',
                description: 'Commitment to delivering the highest quality services'
              },
              {
                title: 'Innovation',
                description: 'Continuously upgrading our solutions and technology'
              },
              {
                title: 'Reliability',
                description: 'Trusted partner for all your security needs'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;