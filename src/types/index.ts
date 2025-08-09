export interface Employee {
  id: string;
  name: string;
  address: string;
  contact: string;
  education: string;
  employeeCode: string;
  department: string;
  role: string;
  grade: string;
  client: string;
  achievements?: string;
  email: string;
  isAdmin: boolean;
}

export interface Client {
  id: string;
  name: string;
  services: string[];
  staffAssigned: number;
  contactPerson: string;
  location: string;
}

export interface Vacancy {
  id: string;
  position: string;
  department: string;
  location: string;
  requirements: string[];
  description: string;
  postedDate: string;
  status: 'open' | 'filled';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  message: string;
  rating: number;
}

export interface RegionalOffice {
  id: string;
  region: string;
  address: string;
  contact: string;
  contactPerson: string;
  email: string;
}