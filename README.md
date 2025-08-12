# Star Securities - ASP.NET Core Web Application

## Project Overview

Star Securities is a comprehensive web application built with ASP.NET Core that provides a complete security services management system. The application serves as both a public-facing website showcasing the company's services and an internal employee management system with role-based access control.

## Company Background

Star Securities has been a pioneer in the Private Security Industry since 2000. The company has evolved from an investigation firm into a "Total Security Solutions Provider" offering:

- **Manned Guarding (MG)** - Professional security personnel services
- **Cash Services (CS)** - Secure cash and valuables transportation
- **Electronic Security Systems (ESS)** - Advanced security technology solutions
- **Recruitment and Training** - Professional security personnel development

The company serves over 250 corporate customers across 24 states and is ISO 9001:2000 certified with a workforce of over 2800 trained personnel and 100 professional managers.

## Technical Architecture

### Backend Technology Stack
- **Framework**: ASP.NET Core 8.0
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: Entity Framework Core with SQL Server
- **API**: RESTful Web API
- **Security**: Role-based authorization, password hashing
- **Logging**: Built-in ASP.NET Core logging

### Frontend Technology Stack
- **Framework**: ASP.NET Core MVC with Razor Pages
- **Styling**: Bootstrap 5 with custom CSS
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Icons**: Bootstrap Icons
- **Responsive Design**: Mobile-first approach

## Key Features

### Public Website Features
1. **Home Page** - Company overview with statistics and services
2. **About Us** - Company history, chairman's profile, board of directors
3. **Our Business** - Detailed service divisions information
4. **Our Network** - Regional offices across North, West, East, South regions
5. **Careers** - Current job openings and application process
6. **Clients** - Client portfolio and success stories
7. **Testimonials** - Customer feedback and ratings
8. **Contact Us** - Contact information and inquiry forms
9. **Site Map** - Complete website navigation structure

### Employee Portal Features
1. **Secure Login** - JWT-based authentication system
2. **Employee Dashboard** - Personal information and quick stats
3. **Employee Directory** - View other employees' details (role-based)
4. **Profile Management** - Update personal information

### Admin Panel Features
1. **Employee Management** - Add, update, delete, edit employee details
2. **Vacancy Management** - Manage job postings and applications
3. **Service Management** - Update company services and offerings
4. **Client Management** - Manage client information and assignments
5. **User Role Management** - Assign and modify user permissions

## Employee Information System

The system maintains comprehensive employee records including:
- Employee Name and Contact Details
- Educational Qualifications
- Employee Code and Department
- Role and Grade Information
- Current Client Assignment
- Achievements and Performance Records

## Security Features

### Authentication & Authorization
- **JWT Token-based Authentication** - Secure, stateless authentication
- **Role-based Access Control** - Different permissions for employees vs admins
- **Password Security** - Hashed passwords with salt
- **Session Management** - Secure token handling and expiration

### Data Protection
- **Input Validation** - Server-side validation for all forms
- **SQL Injection Prevention** - Parameterized queries with Entity Framework
- **XSS Protection** - Output encoding and content security policies
- **CSRF Protection** - Anti-forgery tokens for state-changing operations

## Database Schema

### Core Tables
- **Users** - Employee authentication and basic info
- **Employees** - Detailed employee information
- **Departments** - Company departments and divisions
- **Clients** - Client information and service details
- **Vacancies** - Job openings and requirements
- **Services** - Company service offerings
- **RegionalOffices** - Branch office information
- **Testimonials** - Customer feedback

## API Endpoints

### Authentication Endpoints
- `POST /api/auth/login` - Employee login
- `POST /api/auth/refresh` - Token refresh
- `POST /api/auth/logout` - Secure logout

### Employee Endpoints
- `GET /api/employees` - Get employee list (role-based)
- `GET /api/employees/{id}` - Get employee details
- `PUT /api/employees/{id}` - Update employee (admin only)
- `POST /api/employees` - Create employee (admin only)
- `DELETE /api/employees/{id}` - Delete employee (admin only)

### Admin Endpoints
- `GET /api/admin/vacancies` - Manage job postings
- `GET /api/admin/services` - Manage service offerings
- `GET /api/admin/clients` - Manage client information

## Installation & Setup

### Prerequisites
- .NET 8.0 SDK
- SQL Server (LocalDB for development)
- Visual Studio 2022 or VS Code

### Development Setup
1. Clone the repository
2. Navigate to the project directory
3. Restore NuGet packages: `dotnet restore`
4. Update database: `dotnet ef database update`
5. Run the application: `dotnet run`

### Configuration
Update `appsettings.json` with your specific settings:
- Database connection string
- JWT secret key and settings
- Email configuration (if applicable)
- Logging preferences

## User Roles & Permissions

### Employee Role
- View personal dashboard and information
- Access employee directory (limited view)
- View company information and services
- Update own profile information

### Admin Role
- All employee permissions
- Full employee management (CRUD operations)
- Vacancy management
- Service and client management
- System configuration access

## Demo Credentials

For testing purposes, the system includes demo accounts:
- **Employee**: `rajesh@starsecurity.com` / `password123`
- **Admin**: `priya@starsecurity.com` / `password123`

## Deployment

### Production Deployment
1. Configure production database connection
2. Set secure JWT secret keys
3. Enable HTTPS and security headers
4. Configure logging and monitoring
5. Set up backup and recovery procedures

### Environment Variables
- `ConnectionStrings__DefaultConnection` - Database connection
- `JwtSettings__SecretKey` - JWT signing key
- `JwtSettings__Issuer` - Token issuer
- `JwtSettings__Audience` - Token audience

## Contributing

1. Follow ASP.NET Core coding standards
2. Implement proper error handling and logging
3. Write unit tests for new features
4. Update documentation for API changes
5. Ensure security best practices are followed

## License

This project is proprietary software developed for Star Securities. All rights reserved.

## Support

For technical support or questions about the application, please contact the development team or refer to the internal documentation.

---

**Star Securities** - Total Security Solutions Provider since 2000
ISO 9001:2000 Certified | 250+ Corporate Clients | 24 States Coverage