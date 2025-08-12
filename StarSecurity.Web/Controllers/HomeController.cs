using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StarSecurity.Web.Data;
using StarSecurity.Web.Models;
using System.Diagnostics;

namespace StarSecurity.Web.Controllers;

public class HomeController : Controller
{
    private readonly ApplicationDbContext _context;

    public HomeController(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Index()
    {
        var services = await _context.Services
            .Where(s => s.IsActive)
            .Take(4)
            .ToListAsync();

        ViewBag.Services = services;
        return View();
    }

    public async Task<IActionResult> About()
    {
        return View();
    }

    public async Task<IActionResult> Business()
    {
        var services = await _context.Services
            .Where(s => s.IsActive)
            .ToListAsync();

        return View(services);
    }

    public async Task<IActionResult> Network()
    {
        var offices = await _context.RegionalOffices
            .OrderBy(o => o.Region)
            .ToListAsync();

        return View(offices);
    }

    public async Task<IActionResult> Careers()
    {
        var vacancies = await _context.Vacancies
            .Where(v => v.Status == VacancyStatus.Open)
            .OrderByDescending(v => v.PostedDate)
            .ToListAsync();

        return View(vacancies);
    }

    public async Task<IActionResult> Clients()
    {
        var clients = await _context.Clients
            .OrderBy(c => c.Name)
            .ToListAsync();

        return View(clients);
    }

    public async Task<IActionResult> Testimonials()
    {
        var testimonials = await _context.Testimonials
            .Where(t => t.IsApproved)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync();

        return View(testimonials);
    }

    public IActionResult Contact()
    {
        return View();
    }

    public IActionResult SiteMap()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

public class ErrorViewModel
{
    public string? RequestId { get; set; }
    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}