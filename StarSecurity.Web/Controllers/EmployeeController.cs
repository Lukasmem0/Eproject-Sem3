using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StarSecurity.Web.Models;
using StarSecurity.Web.Services;

namespace StarSecurity.Web.Controllers;

[Authorize]
public class EmployeeController : Controller
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IEmployeeService _employeeService;

    public EmployeeController(UserManager<ApplicationUser> userManager, IEmployeeService employeeService)
    {
        _userManager = userManager;
        _employeeService = employeeService;
    }

    public async Task<IActionResult> Dashboard()
    {
        var user = await _userManager.GetUserAsync(User);
        if (user == null)
        {
            return NotFound();
        }

        return View(user);
    }

    public async Task<IActionResult> Directory()
    {
        var employees = await _employeeService.GetAllEmployeesAsync();
        return View(employees);
    }

    [HttpGet]
    public async Task<IActionResult> Details(int id)
    {
        var employee = await _employeeService.GetEmployeeByIdAsync(id);
        if (employee == null)
        {
            return NotFound();
        }

        return View(employee);
    }
}