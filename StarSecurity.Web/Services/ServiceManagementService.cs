using Microsoft.EntityFrameworkCore;
using StarSecurity.Web.Data;
using StarSecurity.Web.Models;

namespace StarSecurity.Web.Services;

public class ServiceManagementService : IServiceManagementService
{
    private readonly ApplicationDbContext _context;

    public ServiceManagementService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Service>> GetAllServicesAsync()
    {
        return await _context.Services
            .OrderBy(s => s.Name)
            .ToListAsync();
    }

    public async Task<IEnumerable<Service>> GetActiveServicesAsync()
    {
        return await _context.Services
            .Where(s => s.IsActive)
            .OrderBy(s => s.Name)
            .ToListAsync();
    }

    public async Task<Service?> GetServiceByIdAsync(int id)
    {
        return await _context.Services.FindAsync(id);
    }

    public async Task<Service> CreateServiceAsync(Service service)
    {
        _context.Services.Add(service);
        await _context.SaveChangesAsync();
        return service;
    }

    public async Task<Service?> UpdateServiceAsync(int id, Service service)
    {
        var existingService = await _context.Services.FindAsync(id);
        if (existingService == null)
            return null;

        existingService.Name = service.Name;
        existingService.Description = service.Description;
        existingService.Category = service.Category;
        existingService.Features = service.Features;
        existingService.IsActive = service.IsActive;
        existingService.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return existingService;
    }

    public async Task<bool> DeleteServiceAsync(int id)
    {
        var service = await _context.Services.FindAsync(id);
        if (service == null)
            return false;

        _context.Services.Remove(service);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> ServiceExistsAsync(int id)
    {
        return await _context.Services.AnyAsync(s => s.Id == id);
    }
}