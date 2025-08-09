import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, MapPin, Phone, GraduationCap, Award, Building, Users, Calendar } from 'lucide-react';

const Dashboard = () => {
  const { currentUser } = useAuth();

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome, {currentUser.name}</h1>
              <p className="text-gray-600">{currentUser.role} - {currentUser.department}</p>
              {currentUser.isAdmin && (
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-2">
                  Administrator
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Employee Code</label>
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{currentUser.employeeCode}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <div className="flex items-center space-x-2">
                      <Building className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{currentUser.department}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{currentUser.role}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{currentUser.grade}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{currentUser.contact}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <span className="text-gray-900">{currentUser.address}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{currentUser.education}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Client</label>
                    <div className="flex items-center space-x-2">
                      <Building className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{currentUser.client}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {currentUser.achievements && (
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-2">Achievements</h3>
                  <p className="text-green-800">{currentUser.achievements}</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Department Staff</span>
                  <span className="font-semibold text-gray-900">45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Projects</span>
                  <span className="font-semibold text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Years of Service</span>
                  <span className="font-semibold text-gray-900">5</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Security training completed</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Monthly report submitted</p>
                    <p className="text-xs text-gray-500">1 week ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Client site inspection</p>
                    <p className="text-xs text-gray-500">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>

            {currentUser.isAdmin && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Admin Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded">
                    Manage Employees
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded">
                    Update Services
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded">
                    Review Applications
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;