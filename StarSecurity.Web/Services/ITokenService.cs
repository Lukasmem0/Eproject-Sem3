using StarSecurity.Web.Models;

namespace StarSecurity.Web.Services;

public interface ITokenService
{
    Task<string> GenerateTokenAsync(ApplicationUser user);
    Task<bool> ValidateTokenAsync(string token);
}