using StarSecurity.Web.Models;
using StarSecurity.Web.Models.ViewModels;

namespace StarSecurity.Web.Services;

public interface IEmployeeService
{
    Task<IEnumerable<Employee>> GetAllEmployeesAsync();
    Task<Employee?> GetEmployeeByIdAsync(int id);
    Task<Employee?> GetEmployeeByEmailAsync(string email);
    Task<Employee> CreateEmployeeAsync(EmployeeViewModel model);
    Task<Employee?> UpdateEmployeeAsync(int id, EmployeeViewModel model);
    Task<bool> DeleteEmployeeAsync(int id);
    Task<bool> EmployeeExistsAsync(int id);
    Task<bool> EmployeeCodeExistsAsync(string employeeCode, int? excludeId = null);
    Task<bool> EmailExistsAsync(string email, int? excludeId = null);
}