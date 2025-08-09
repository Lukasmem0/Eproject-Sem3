import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Star Securities</span>
            </div>
            <p className="text-gray-300 mb-4">
              Pioneer in Private Security Industry since 2000. Total Security Solutions Provider with ISO 9001:2000 certification.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/business" className="text-gray-300 hover:text-white transition-colors duration-200">Our Business</Link></li>
              <li><Link to="/network" className="text-gray-300 hover:text-white transition-colors duration-200">Our Network</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-200">Testimonials</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Manned Guarding</li>
              <li>Cash Services</li>
              <li>Electronic Security Systems</li>
              <li>Recruitment & Training</li>
              <li>Investigation Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <p className="text-gray-300">
                  Head Office: Plot No. 123<br />
                  Sector 44, Gurgaon<br />
                  Haryana - 122003
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">+91-124-4567890</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">info@starsecurity.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Star Securities. All rights reserved. | 
            <Link to="/sitemap" className="hover:text-white transition-colors duration-200 ml-1">Site Map</Link> |
            <span className="ml-1">ISO 9001:2000 Certified</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;