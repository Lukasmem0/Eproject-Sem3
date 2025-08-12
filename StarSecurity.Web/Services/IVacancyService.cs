using StarSecurity.Web.Models;

namespace StarSecurity.Web.Services;

public interface IVacancyService
{
    Task<IEnumerable<Vacancy>> GetAllVacanciesAsync();
    Task<IEnumerable<Vacancy>> GetOpenVacanciesAsync();
    Task<Vacancy?> GetVacancyByIdAsync(int id);
    Task<Vacancy> CreateVacancyAsync(Vacancy vacancy);
    Task<Vacancy?> UpdateVacancyAsync(int id, Vacancy vacancy);
    Task<bool> DeleteVacancyAsync(int id);
    Task<bool> VacancyExistsAsync(int id);
}