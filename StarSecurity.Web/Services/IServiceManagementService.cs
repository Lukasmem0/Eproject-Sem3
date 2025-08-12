using StarSecurity.Web.Models;

namespace StarSecurity.Web.Services;

public interface IServiceManagementService
{
    Task<IEnumerable<Service>> GetAllServicesAsync();
    Task<IEnumerable<Service>> GetActiveServicesAsync();
    Task<Service?> GetServiceByIdAsync(int id);
    Task<Service> CreateServiceAsync(Service service);
    Task<Service?> UpdateServiceAsync(int id, Service service);
    Task<bool> DeleteServiceAsync(int id);
    Task<bool> ServiceExistsAsync(int id);
}