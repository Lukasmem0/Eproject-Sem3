using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace StarSecurity.Web.Models;

public class ApplicationUser : IdentityUser
{
    [Required]
    [StringLength(100)]
    public string FullName { get; set; } = string.Empty;

    [StringLength(200)]
    public string Address { get; set; } = string.Empty;

    [StringLength(100)]
    public string Education { get; set; } = string.Empty;

    [StringLength(20)]
    public string EmployeeCode { get; set; } = string.Empty;

    [StringLength(50)]
    public string Department { get; set; } = string.Empty;

    [StringLength(50)]
    public string Role { get; set; } = string.Empty;

    [StringLength(20)]
    public string Grade { get; set; } = string.Empty;

    [StringLength(100)]
    public string Client { get; set; } = string.Empty;

    [StringLength(500)]
    public string? Achievements { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}