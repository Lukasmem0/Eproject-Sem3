import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, currentUser, logout } = useAuth();

  const publicNavItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/business', label: 'Our Business' },
    { path: '/network', label: 'Our Network' },
    { path: '/careers', label: 'Careers' },
    { path: '/clients', label: 'Clients' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const employeeNavItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/employees', label: 'Employee Directory' },
    ...(currentUser?.isAdmin ? [
      { path: '/admin/employees', label: 'Manage Employees' },
      { path: '/admin/vacancies', label: 'Manage Vacancies' },
      { path: '/admin/services', label: 'Manage Services' },
      { path: '/admin/clients', label: 'Manage Clients' }
    ] : [])
  ];

  const navItems = isAuthenticated ? employeeNavItems : publicNavItems;

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Star Securities</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                  location.pathname === item.path ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">{currentUser?.name}</span>
                  {currentUser?.isAdmin && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Admin</span>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
              >
                Employee Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-4">
            <div className="space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <div className="px-3 py-2 text-sm text-gray-600">
                    Logged in as: <span className="font-medium">{currentUser?.name}</span>
                    {currentUser?.isAdmin && (
                      <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Admin</span>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200 w-full text-left"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Employee Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;