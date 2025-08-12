using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using StarSecurity.Web.Models;

namespace StarSecurity.Web.Data;

public static class SeedData
{
    public static async Task Initialize(ApplicationDbContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
    {
        // Ensure database is created
        await context.Database.EnsureCreatedAsync();

        // Create roles
        if (!await roleManager.RoleExistsAsync("Admin"))
        {
            await roleManager.CreateAsync(new IdentityRole("Admin"));
        }

        if (!await roleManager.RoleExistsAsync("Employee"))
        {
            await roleManager.CreateAsync(new IdentityRole("Employee"));
        }

        // Create admin user
        if (await userManager.FindByEmailAsync("priya@starsecurity.com") == null)
        {
            var adminUser = new ApplicationUser
            {
                UserName = "priya@starsecurity.com",
                Email = "priya@starsecurity.com",
                FullName = "Priya Singh",
                Address = "456 Admin Block, Mumbai",
                PhoneNumber = "+91-9876543211",
                Education = "MBA in Operations",
                EmployeeCode = "SS002",
                Department = "Administration",
                Role = "HR Manager",
                Grade = "Grade A+",
                Client = "Head Office",
                Achievements = "Best Training Program Award",
                EmailConfirmed = true
            };

            var result = await userManager.CreateAsync(adminUser, "password123");
            if (result.Succeeded)
            {
                await userManager.AddToRoleAsync(adminUser, "Admin");
            }
        }

        // Create employee user
        if (await userManager.FindByEmailAsync("rajesh@starsecurity.com") == null)
        {
            var employeeUser = new ApplicationUser
            {
                UserName = "rajesh@starsecurity.com",
                Email = "rajesh@starsecurity.com",
                FullName = "Rajesh Kumar",
                Address = "123 Security Lane, Delhi",
                PhoneNumber = "+91-9876543210",
                Education = "B.Sc in Security Management",
                EmployeeCode = "SS001",
                Department = "Manned Guarding",
                Role = "Security Supervisor",
                Grade = "Grade A",
                Client = "HDFC Bank",
                Achievements = "Employee of the Year 2023",
                EmailConfirmed = true
            };

            var result = await userManager.CreateAsync(employeeUser, "password123");
            if (result.Succeeded)
            {
                await userManager.AddToRoleAsync(employeeUser, "Employee");
            }
        }

        // Seed Employees
        if (!context.Employees.Any())
        {
            var employees = new[]
            {
                new Employee
                {
                    Name = "Rajesh Kumar",
                    Address = "123 Security Lane, Delhi",
                    Contact = "+91-9876543210",
                    Education = "B.Sc in Security Management",
                    EmployeeCode = "SS001",
                    Department = "Manned Guarding",
                    Role = "Security Supervisor",
                    Grade = "Grade A",
                    Client = "HDFC Bank",
                    Achievements = "Employee of the Year 2023",
                    Email = "rajesh@starsecurity.com",
                    IsAdmin = false
                },
                new Employee
                {
                    Name = "Priya Singh",
                    Address = "456 Admin Block, Mumbai",
                    Contact = "+91-9876543211",
                    Education = "MBA in Operations",
                    EmployeeCode = "SS002",
                    Department = "Administration",
                    Role = "HR Manager",
                    Grade = "Grade A+",
                    Client = "Head Office",
                    Achievements = "Best Training Program Award",
                    Email = "priya@starsecurity.com",
                    IsAdmin = true
                },
                new Employee
                {
                    Name = "Michael Johnson",
                    Address = "789 Tech Park, Bangalore",
                    Contact = "+91-9876543212",
                    Education = "B.Tech in Electronics",
                    EmployeeCode = "SS003",
                    Department = "Electronic Security Systems",
                    Role = "Technical Lead",
                    Grade = "Grade A",
                    Client = "Infosys",
                    Email = "michael@starsecurity.com",
                    IsAdmin = false
                }
            };

            context.Employees.AddRange(employees);
        }

        // Seed Regional Offices
        if (!context.RegionalOffices.Any())
        {
            var offices = new[]
            {
                new RegionalOffice
                {
                    Region = "North Region",
                    Address = "Plot No. 123, Sector 44, Gurgaon, Haryana - 122003",
                    Contact = "+91-124-4567890",
                    ContactPerson = "Mr. Vikram Singh",
                    Email = "north@starsecurity.com"
                },
                new RegionalOffice
                {
                    Region = "West Region",
                    Address = "456 Business Park, Andheri East, Mumbai, Maharashtra - 400069",
                    Contact = "+91-22-26851234",
                    ContactPerson = "Ms. Kavita Patel",
                    Email = "west@starsecurity.com"
                },
                new RegionalOffice
                {
                    Region = "East Region",
                    Address = "789 Salt Lake, Sector V, Kolkata, West Bengal - 700091",
                    Contact = "+91-33-40123456",
                    ContactPerson = "Mr. Subhash Bose",
                    Email = "east@starsecurity.com"
                },
                new RegionalOffice
                {
                    Region = "South Region",
                    Address = "321 Tech Park, Electronic City, Bangalore, Karnataka - 560100",
                    Contact = "+91-80-28765432",
                    ContactPerson = "Mr. Ravi Kumar",
                    Email = "south@starsecurity.com"
                }
            };

            context.RegionalOffices.AddRange(offices);
        }

        // Seed Services
        if (!context.Services.Any())
        {
            var services = new[]
            {
                new Service
                {
                    Name = "Manned Guarding",
                    Description = "Comprehensive security personnel services",
                    Category = "Physical Security",
                    Features = "24/7 Security Guards;Fire Squad Services;Dog Squad;Personal Bodyguards"
                },
                new Service
                {
                    Name = "Cash Services",
                    Description = "Secure cash and valuables transportation",
                    Category = "Financial Security",
                    Features = "Cash Transfer;ATM Replenishment;Vaulting Services;Multi-point Collection"
                },
                new Service
                {
                    Name = "Electronic Security Systems",
                    Description = "Advanced electronic security solutions",
                    Category = "Technology Security",
                    Features = "CCTV Systems;Access Control;Fire Alarms;Intrusion Detection"
                },
                new Service
                {
                    Name = "Recruitment and Training",
                    Description = "Professional security personnel training",
                    Category = "Human Resources",
                    Features = "Security Training;Personnel Recruitment;Skill Development;Certification Programs"
                }
            };

            context.Services.AddRange(services);
        }

        // Seed Clients
        if (!context.Clients.Any())
        {
            var clients = new[]
            {
                new Client
                {
                    Name = "HDFC Bank",
                    Services = "Manned Guarding;Cash Services;Electronic Security Systems",
                    StaffAssigned = 120,
                    ContactPerson = "Amit Sharma",
                    Location = "Mumbai",
                    ContactNumber = "+91-22-12345678",
                    Email = "amit.sharma@hdfc.com"
                },
                new Client
                {
                    Name = "Infosys Limited",
                    Services = "Manned Guarding;Electronic Security Systems",
                    StaffAssigned = 85,
                    ContactPerson = "Sarah Wilson",
                    Location = "Bangalore",
                    ContactNumber = "+91-80-87654321",
                    Email = "sarah.wilson@infosys.com"
                },
                new Client
                {
                    Name = "DLF Mall",
                    Services = "Manned Guarding;Recruitment and Training",
                    StaffAssigned = 45,
                    ContactPerson = "Rakesh Gupta",
                    Location = "Gurgaon",
                    ContactNumber = "+91-124-9876543",
                    Email = "rakesh.gupta@dlf.com"
                }
            };

            context.Clients.AddRange(clients);
        }

        // Seed Vacancies
        if (!context.Vacancies.Any())
        {
            var vacancies = new[]
            {
                new Vacancy
                {
                    Position = "Security Guard",
                    Department = "Manned Guarding",
                    Location = "Delhi",
                    Requirements = "12th Pass;Physical Fitness;2+ years experience",
                    Description = "Responsible for maintaining security at client premises",
                    Status = VacancyStatus.Open
                },
                new Vacancy
                {
                    Position = "CCTV Technician",
                    Department = "Electronic Security Systems",
                    Location = "Mumbai",
                    Requirements = "Diploma in Electronics;CCTV Installation Experience;Problem-solving skills",
                    Description = "Install and maintain CCTV systems for clients",
                    Status = VacancyStatus.Open
                }
            };

            context.Vacancies.AddRange(vacancies);
        }

        // Seed Testimonials
        if (!context.Testimonials.Any())
        {
            var testimonials = new[]
            {
                new Testimonial
                {
                    ClientName = "Amit Sharma",
                    Company = "HDFC Bank",
                    Message = "Star Securities has been our trusted partner for over 5 years. Their professional service and reliability are unmatched.",
                    Rating = 5,
                    IsApproved = true
                },
                new Testimonial
                {
                    ClientName = "Sarah Wilson",
                    Company = "Infosys Limited",
                    Message = "Exceptional security services with cutting-edge technology solutions. Highly recommended for corporate security.",
                    Rating = 5,
                    IsApproved = true
                },
                new Testimonial
                {
                    ClientName = "Rakesh Gupta",
                    Company = "DLF Mall",
                    Message = "Professional team with excellent training programs. They have significantly improved our security standards.",
                    Rating = 4,
                    IsApproved = true
                }
            };

            context.Testimonials.AddRange(testimonials);
        }

        await context.SaveChangesAsync();
    }
}