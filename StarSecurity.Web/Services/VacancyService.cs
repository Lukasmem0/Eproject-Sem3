using Microsoft.EntityFrameworkCore;
using StarSecurity.Web.Data;
using StarSecurity.Web.Models;

namespace StarSecurity.Web.Services;

public class VacancyService : IVacancyService
{
    private readonly ApplicationDbContext _context;

    public VacancyService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Vacancy>> GetAllVacanciesAsync()
    {
        return await _context.Vacancies
            .OrderByDescending(v => v.PostedDate)
            .ToListAsync();
    }

    public async Task<IEnumerable<Vacancy>> GetOpenVacanciesAsync()
    {
        return await _context.Vacancies
            .Where(v => v.Status == VacancyStatus.Open)
            .OrderByDescending(v => v.PostedDate)
            .ToListAsync();
    }

    public async Task<Vacancy?> GetVacancyByIdAsync(int id)
    {
        return await _context.Vacancies.FindAsync(id);
    }

    public async Task<Vacancy> CreateVacancyAsync(Vacancy vacancy)
    {
        _context.Vacancies.Add(vacancy);
        await _context.SaveChangesAsync();
        return vacancy;
    }

    public async Task<Vacancy?> UpdateVacancyAsync(int id, Vacancy vacancy)
    {
        var existingVacancy = await _context.Vacancies.FindAsync(id);
        if (existingVacancy == null)
            return null;

        existingVacancy.Position = vacancy.Position;
        existingVacancy.Department = vacancy.Department;
        existingVacancy.Location = vacancy.Location;
        existingVacancy.Requirements = vacancy.Requirements;
        existingVacancy.Description = vacancy.Description;
        existingVacancy.Status = vacancy.Status;
        existingVacancy.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return existingVacancy;
    }

    public async Task<bool> DeleteVacancyAsync(int id)
    {
        var vacancy = await _context.Vacancies.FindAsync(id);
        if (vacancy == null)
            return false;

        _context.Vacancies.Remove(vacancy);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> VacancyExistsAsync(int id)
    {
        return await _context.Vacancies.AnyAsync(v => v.Id == id);
    }
}