using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StarSecurity.Web.Models;
using StarSecurity.Web.Models.ViewModels;
using StarSecurity.Web.Services;

namespace StarSecurity.Web.Controllers;

[Authorize(Roles = "Admin")]
public class AdminController : Controller
{
    private readonly IEmployeeService _employeeService;
    private readonly IVacancyService _vacancyService;
    private readonly IClientService _clientService;
    private readonly IServiceManagementService _serviceManagementService;

    public AdminController(
        IEmployeeService employeeService,
        IVacancyService vacancyService,
        IClientService clientService,
        IServiceManagementService serviceManagementService)
    {
        _employeeService = employeeService;
        _vacancyService = vacancyService;
        _clientService = clientService;
        _serviceManagementService = serviceManagementService;
    }

    public async Task<IActionResult> Index()
    {
        // Get statistics for dashboard
        var employees = await _employeeService.GetAllEmployeesAsync();
        var vacancies = await _vacancyService.GetOpenVacanciesAsync();
        var clients = await _clientService.GetAllClientsAsync();
        var services = await _serviceManagementService.GetActiveServicesAsync();
        
        ViewBag.EmployeeCount = employees.Count();
        ViewBag.VacancyCount = vacancies.Count();
        ViewBag.ClientCount = clients.Count();
        ViewBag.ServiceCount = services.Count();
        
        return View();
    }

    #region Employee Management

    public async Task<IActionResult> Employees()
    {
        var employees = await _employeeService.GetAllEmployeesAsync();
        return View(employees);
    }

    [HttpGet]
    public IActionResult CreateEmployee()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> CreateEmployee(EmployeeViewModel model)
    {
        if (ModelState.IsValid)
        {
            if (await _employeeService.EmployeeCodeExistsAsync(model.EmployeeCode))
            {
                ModelState.AddModelError("EmployeeCode", "Employee code already exists.");
                return View(model);
            }

            if (await _employeeService.EmailExistsAsync(model.Email))
            {
                ModelState.AddModelError("Email", "Email already exists.");
                return View(model);
            }

            await _employeeService.CreateEmployeeAsync(model);
            TempData["SuccessMessage"] = "Employee created successfully.";
            return RedirectToAction(nameof(Employees));
        }

        return View(model);
    }

    [HttpGet]
    public async Task<IActionResult> EditEmployee(int id)
    {
        var employee = await _employeeService.GetEmployeeByIdAsync(id);
        if (employee == null)
        {
            return NotFound();
        }

        var model = new EmployeeViewModel
        {
            Id = employee.Id,
            Name = employee.Name,
            Address = employee.Address,
            Contact = employee.Contact,
            Education = employee.Education,
            EmployeeCode = employee.EmployeeCode,
            Department = employee.Department,
            Role = employee.Role,
            Grade = employee.Grade,
            Client = employee.Client,
            Achievements = employee.Achievements,
            Email = employee.Email,
            IsAdmin = employee.IsAdmin
        };

        return View(model);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> EditEmployee(int id, EmployeeViewModel model)
    {
        if (id != model.Id)
        {
            return NotFound();
        }

        if (ModelState.IsValid)
        {
            if (await _employeeService.EmployeeCodeExistsAsync(model.EmployeeCode, id))
            {
                ModelState.AddModelError("EmployeeCode", "Employee code already exists.");
                return View(model);
            }

            if (await _employeeService.EmailExistsAsync(model.Email, id))
            {
                ModelState.AddModelError("Email", "Email already exists.");
                return View(model);
            }

            var result = await _employeeService.UpdateEmployeeAsync(id, model);
            if (result != null)
            {
                TempData["SuccessMessage"] = "Employee updated successfully.";
                return RedirectToAction(nameof(Employees));
            }
        }

        return View(model);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteEmployee(int id)
    {
        var success = await _employeeService.DeleteEmployeeAsync(id);
        if (success)
        {
            TempData["SuccessMessage"] = "Employee deleted successfully.";
        }
        else
        {
            TempData["ErrorMessage"] = "Employee not found.";
        }

        return RedirectToAction(nameof(Employees));
    }

    #endregion

    #region Vacancy Management

    public async Task<IActionResult> Vacancies()
    {
        var vacancies = await _vacancyService.GetAllVacanciesAsync();
        return View(vacancies);
    }

    [HttpGet]
    public IActionResult CreateVacancy()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> CreateVacancy(Vacancy model)
    {
        if (ModelState.IsValid)
        {
            await _vacancyService.CreateVacancyAsync(model);
            TempData["SuccessMessage"] = "Vacancy created successfully.";
            return RedirectToAction(nameof(Vacancies));
        }

        return View(model);
    }

    [HttpGet]
    public async Task<IActionResult> EditVacancy(int id)
    {
        var vacancy = await _vacancyService.GetVacancyByIdAsync(id);
        if (vacancy == null)
        {
            return NotFound();
        }

        return View(vacancy);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> EditVacancy(int id, Vacancy model)
    {
        if (id != model.Id)
        {
            return NotFound();
        }

        if (ModelState.IsValid)
        {
            var result = await _vacancyService.UpdateVacancyAsync(id, model);
            if (result != null)
            {
                TempData["SuccessMessage"] = "Vacancy updated successfully.";
                return RedirectToAction(nameof(Vacancies));
            }
        }

        return View(model);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteVacancy(int id)
    {
        var success = await _vacancyService.DeleteVacancyAsync(id);
        if (success)
        {
            TempData["SuccessMessage"] = "Vacancy deleted successfully.";
        }
        else
        {
            TempData["ErrorMessage"] = "Vacancy not found.";
        }

        return RedirectToAction(nameof(Vacancies));
    }

    #endregion

    #region Client Management

    public async Task<IActionResult> Clients()
    {
        var clients = await _clientService.GetAllClientsAsync();
        return View(clients);
    }

    [HttpGet]
    public IActionResult CreateClient()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> CreateClient(Client model)
    {
        if (ModelState.IsValid)
        {
            await _clientService.CreateClientAsync(model);
            TempData["SuccessMessage"] = "Client created successfully.";
            return RedirectToAction(nameof(Clients));
        }

        return View(model);
    }

    [HttpGet]
    public async Task<IActionResult> EditClient(int id)
    {
        var client = await _clientService.GetClientByIdAsync(id);
        if (client == null)
        {
            return NotFound();
        }

        return View(client);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> EditClient(int id, Client model)
    {
        if (id != model.Id)
        {
            return NotFound();
        }

        if (ModelState.IsValid)
        {
            var result = await _clientService.UpdateClientAsync(id, model);
            if (result != null)
            {
                TempData["SuccessMessage"] = "Client updated successfully.";
                return RedirectToAction(nameof(Clients));
            }
        }

        return View(model);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteClient(int id)
    {
        var success = await _clientService.DeleteClientAsync(id);
        if (success)
        {
            TempData["SuccessMessage"] = "Client deleted successfully.";
        }
        else
        {
            TempData["ErrorMessage"] = "Client not found.";
        }

        return RedirectToAction(nameof(Clients));
    }

    #endregion

    #region Service Management

    public async Task<IActionResult> Services()
    {
        var services = await _serviceManagementService.GetAllServicesAsync();
        return View(services);
    }

    [HttpGet]
    public IActionResult CreateService()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> CreateService(Service model)
    {
        if (ModelState.IsValid)
        {
            await _serviceManagementService.CreateServiceAsync(model);
            TempData["SuccessMessage"] = "Service created successfully.";
            return RedirectToAction(nameof(Services));
        }

        return View(model);
    }

    [HttpGet]
    public async Task<IActionResult> EditService(int id)
    {
        var service = await _serviceManagementService.GetServiceByIdAsync(id);
        if (service == null)
        {
            return NotFound();
        }

        return View(service);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> EditService(int id, Service model)
    {
        if (id != model.Id)
        {
            return NotFound();
        }

        if (ModelState.IsValid)
        {
            var result = await _serviceManagementService.UpdateServiceAsync(id, model);
            if (result != null)
            {
                TempData["SuccessMessage"] = "Service updated successfully.";
                return RedirectToAction(nameof(Services));
            }
        }

        return View(model);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteService(int id)
    {
        var success = await _serviceManagementService.DeleteServiceAsync(id);
        if (success)
        {
            TempData["SuccessMessage"] = "Service deleted successfully.";
        }
        else
        {
            TempData["ErrorMessage"] = "Service not found.";
        }

        return RedirectToAction(nameof(Services));
    }

    #endregion
}