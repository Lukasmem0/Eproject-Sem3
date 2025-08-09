import { Employee, Client, Vacancy, Service, Testimonial, RegionalOffice } from '../types';

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    address: '123 Security Lane, Delhi',
    contact: '+91-9876543210',
    education: 'B.Sc in Security Management',
    employeeCode: 'SS001',
    department: 'Manned Guarding',
    role: 'Security Supervisor',
    grade: 'Grade A',
    client: 'HDFC Bank',
    achievements: 'Employee of the Year 2023',
    email: 'rajesh@starsecurity.com',
    isAdmin: false
  },
  {
    id: '2',
    name: 'Priya Singh',
    address: '456 Admin Block, Mumbai',
    contact: '+91-9876543211',
    education: 'MBA in Operations',
    employeeCode: 'SS002',
    department: 'Administration',
    role: 'HR Manager',
    grade: 'Grade A+',
    client: 'Head Office',
    achievements: 'Best Training Program Award',
    email: 'priya@starsecurity.com',
    isAdmin: true
  },
  {
    id: '3',
    name: 'Michael Johnson',
    address: '789 Tech Park, Bangalore',
    contact: '+91-9876543212',
    education: 'B.Tech in Electronics',
    employeeCode: 'SS003',
    department: 'Electronic Security Systems',
    role: 'Technical Lead',
    grade: 'Grade A',
    client: 'Infosys',
    email: 'michael@starsecurity.com',
    isAdmin: false
  }
];

export const clients: Client[] = [
  {
    id: '1',
    name: 'HDFC Bank',
    services: ['Manned Guarding', 'Cash Services', 'Electronic Security Systems'],
    staffAssigned: 120,
    contactPerson: 'Amit Sharma',
    location: 'Mumbai'
  },
  {
    id: '2',
    name: 'Infosys Limited',
    services: ['Manned Guarding', 'Electronic Security Systems'],
    staffAssigned: 85,
    contactPerson: 'Sarah Wilson',
    location: 'Bangalore'
  },
  {
    id: '3',
    name: 'DLF Mall',
    services: ['Manned Guarding', 'Recruitment and Training'],
    staffAssigned: 45,
    contactPerson: 'Rakesh Gupta',
    location: 'Gurgaon'
  }
];

export const vacancies: Vacancy[] = [
  {
    id: '1',
    position: 'Security Guard',
    department: 'Manned Guarding',
    location: 'Delhi',
    requirements: ['12th Pass', 'Physical Fitness', '2+ years experience'],
    description: 'Responsible for maintaining security at client premises',
    postedDate: '2025-01-10',
    status: 'open'
  },
  {
    id: '2',
    position: 'CCTV Technician',
    department: 'Electronic Security Systems',
    location: 'Mumbai',
    requirements: ['Diploma in Electronics', 'CCTV Installation Experience', 'Problem-solving skills'],
    description: 'Install and maintain CCTV systems for clients',
    postedDate: '2025-01-08',
    status: 'open'
  }
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Manned Guarding',
    description: 'Comprehensive security personnel services',
    category: 'Physical Security',
    features: ['24/7 Security Guards', 'Fire Squad Services', 'Dog Squad', 'Personal Bodyguards']
  },
  {
    id: '2',
    name: 'Cash Services',
    description: 'Secure cash and valuables transportation',
    category: 'Financial Security',
    features: ['Cash Transfer', 'ATM Replenishment', 'Vaulting Services', 'Multi-point Collection']
  },
  {
    id: '3',
    name: 'Electronic Security Systems',
    description: 'Advanced electronic security solutions',
    category: 'Technology Security',
    features: ['CCTV Systems', 'Access Control', 'Fire Alarms', 'Intrusion Detection']
  },
  {
    id: '4',
    name: 'Recruitment and Training',
    description: 'Professional security personnel training',
    category: 'Human Resources',
    features: ['Security Training', 'Personnel Recruitment', 'Skill Development', 'Certification Programs']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Amit Sharma',
    company: 'HDFC Bank',
    message: 'Star Securities has been our trusted partner for over 5 years. Their professional service and reliability are unmatched.',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Sarah Wilson',
    company: 'Infosys Limited',
    message: 'Exceptional security services with cutting-edge technology solutions. Highly recommended for corporate security.',
    rating: 5
  },
  {
    id: '3',
    clientName: 'Rakesh Gupta',
    company: 'DLF Mall',
    message: 'Professional team with excellent training programs. They have significantly improved our security standards.',
    rating: 4
  }
];

export const regionalOffices: RegionalOffice[] = [
  {
    id: '1',
    region: 'North Region',
    address: 'Plot No. 123, Sector 44, Gurgaon, Haryana - 122003',
    contact: '+91-124-4567890',
    contactPerson: 'Mr. Vikram Singh',
    email: 'north@starsecurity.com'
  },
  {
    id: '2',
    region: 'West Region',
    address: '456 Business Park, Andheri East, Mumbai, Maharashtra - 400069',
    contact: '+91-22-26851234',
    contactPerson: 'Ms. Kavita Patel',
    email: 'west@starsecurity.com'
  },
  {
    id: '3',
    region: 'East Region',
    address: '789 Salt Lake, Sector V, Kolkata, West Bengal - 700091',
    contact: '+91-33-40123456',
    contactPerson: 'Mr. Subhash Bose',
    email: 'east@starsecurity.com'
  },
  {
    id: '4',
    region: 'South Region',
    address: '321 Tech Park, Electronic City, Bangalore, Karnataka - 560100',
    contact: '+91-80-28765432',
    contactPerson: 'Mr. Ravi Kumar',
    email: 'south@starsecurity.com'
  }
];

// Chairman and Board Members data
export const chairmanProfile = {
  name: 'Mr. Rajesh Khanna',
  position: 'Chairman & Managing Director',
  experience: '25+ years in Security Industry',
  education: 'MBA in Business Administration, Ex-Army Officer',
  message: 'Star Securities has been built on the foundation of trust, integrity, and excellence. Our commitment to providing world-class security solutions has made us a leader in the industry.',
  image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
};

export const boardMembers = [
  {
    name: 'Ms. Sunita Sharma',
    position: 'Executive Director - Operations',
    experience: '20+ years in Security Operations',
    education: 'M.Sc in Security Management'
  },
  {
    name: 'Mr. Anil Kumar',
    position: 'Director - Technology',
    experience: '18+ years in Electronic Security',
    education: 'B.Tech in Electronics & Communication'
  },
  {
    name: 'Ms. Priya Nair',
    position: 'Director - Human Resources',
    experience: '15+ years in HR Management',
    education: 'MBA in Human Resources'
  }
];

export const companyHistory = {
  founded: '2000',
  overview: 'Star Securities was established in 2000 as an investigation firm and has since evolved into a comprehensive Total Security Solutions Provider. Over more than two decades, we have consistently delivered excellence in security services across India.',
  milestones: [
    { year: '2000', event: 'Founded as an investigation firm' },
    { year: '2005', event: 'Expanded to manned guarding services' },
    { year: '2010', event: 'Achieved ISO 9001:2000 certification' },
    { year: '2015', event: 'Launched electronic security systems division' },
    { year: '2020', event: 'Reached 250+ corporate customers across 24 states' },
    { year: '2025', event: 'Continuing innovation with state-of-the-art ERP solutions' }
  ]
};