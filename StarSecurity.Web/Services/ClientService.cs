using Microsoft.EntityFrameworkCore;
using StarSecurity.Web.Data;
using StarSecurity.Web.Models;

namespace StarSecurity.Web.Services;

public class ClientService : IClientService
{
    private readonly ApplicationDbContext _context;

    public ClientService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Client>> GetAllClientsAsync()
    {
        return await _context.Clients
            .OrderBy(c => c.Name)
            .ToListAsync();
    }

    public async Task<Client?> GetClientByIdAsync(int id)
    {
        return await _context.Clients.FindAsync(id);
    }

    public async Task<Client> CreateClientAsync(Client client)
    {
        _context.Clients.Add(client);
        await _context.SaveChangesAsync();
        return client;
    }

    public async Task<Client?> UpdateClientAsync(int id, Client client)
    {
        var existingClient = await _context.Clients.FindAsync(id);
        if (existingClient == null)
            return null;

        existingClient.Name = client.Name;
        existingClient.Services = client.Services;
        existingClient.StaffAssigned = client.StaffAssigned;
        existingClient.ContactPerson = client.ContactPerson;
        existingClient.Location = client.Location;
        existingClient.ContactNumber = client.ContactNumber;
        existingClient.Email = client.Email;
        existingClient.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return existingClient;
    }

    public async Task<bool> DeleteClientAsync(int id)
    {
        var client = await _context.Clients.FindAsync(id);
        if (client == null)
            return false;

        _context.Clients.Remove(client);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> ClientExistsAsync(int id)
    {
        return await _context.Clients.AnyAsync(c => c.Id == id);
    }
}