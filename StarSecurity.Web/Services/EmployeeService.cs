using Microsoft.EntityFrameworkCore;
using StarSecurity.Web.Data;
using StarSecurity.Web.Models;
using StarSecurity.Web.Models.ViewModels;

namespace StarSecurity.Web.Services;

public class EmployeeService : IEmployeeService
{
    private readonly ApplicationDbContext _context;

    public EmployeeService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Employee>> GetAllEmployeesAsync()
    {
        return await _context.Employees
            .OrderBy(e => e.Name)
            .ToListAsync();
    }

    public async Task<Employee?> GetEmployeeByIdAsync(int id)
    {
        return await _context.Employees.FindAsync(id);
    }

    public async Task<Employee?> GetEmployeeByEmailAsync(string email)
    {
        return await _context.Employees
            .FirstOrDefaultAsync(e => e.Email == email);
    }

    public async Task<Employee> CreateEmployeeAsync(EmployeeViewModel model)
    {
        var employee = new Employee
        {
            Name = model.Name,
            Address = model.Address,
            Contact = model.Contact,
            Education = model.Education,
            EmployeeCode = model.EmployeeCode,
            Department = model.Department,
            Role = model.Role,
            Grade = model.Grade,
            Client = model.Client,
            Achievements = model.Achievements,
            Email = model.Email,
            IsAdmin = model.IsAdmin
        };

        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();
        return employee;
    }

    public async Task<Employee?> UpdateEmployeeAsync(int id, EmployeeViewModel model)
    {
        var employee = await _context.Employees.FindAsync(id);
        if (employee == null)
            return null;

        employee.Name = model.Name;
        employee.Address = model.Address;
        employee.Contact = model.Contact;
        employee.Education = model.Education;
        employee.EmployeeCode = model.EmployeeCode;
        employee.Department = model.Department;
        employee.Role = model.Role;
        employee.Grade = model.Grade;
        employee.Client = model.Client;
        employee.Achievements = model.Achievements;
        employee.Email = model.Email;
        employee.IsAdmin = model.IsAdmin;
        employee.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return employee;
    }

    public async Task<bool> DeleteEmployeeAsync(int id)
    {
        var employee = await _context.Employees.FindAsync(id);
        if (employee == null)
            return false;

        _context.Employees.Remove(employee);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> EmployeeExistsAsync(int id)
    {
        return await _context.Employees.AnyAsync(e => e.Id == id);
    }

    public async Task<bool> EmployeeCodeExistsAsync(string employeeCode, int? excludeId = null)
    {
        var query = _context.Employees.Where(e => e.EmployeeCode == employeeCode);
        if (excludeId.HasValue)
        {
            query = query.Where(e => e.Id != excludeId.Value);
        }
        return await query.AnyAsync();
    }

    public async Task<bool> EmailExistsAsync(string email, int? excludeId = null)
    {
        var query = _context.Employees.Where(e => e.Email == email);
        if (excludeId.HasValue)
        {
            query = query.Where(e => e.Id != excludeId.Value);
        }
        return await query.AnyAsync();
    }
}