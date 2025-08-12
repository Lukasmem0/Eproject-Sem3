using System.ComponentModel.DataAnnotations;

namespace StarSecurity.Web.Models;

public class Employee
{
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [StringLength(200)]
    public string Address { get; set; } = string.Empty;

    [Required]
    [Phone]
    [StringLength(20)]
    public string Contact { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string Education { get; set; } = string.Empty;

    [Required]
    [StringLength(20)]
    public string EmployeeCode { get; set; } = string.Empty;

    [Required]
    [StringLength(50)]
    public string Department { get; set; } = string.Empty;

    [Required]
    [StringLength(50)]
    public string Role { get; set; } = string.Empty;

    [Required]
    [StringLength(20)]
    public string Grade { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string Client { get; set; } = string.Empty;

    [StringLength(500)]
    public string? Achievements { get; set; }

    [Required]
    [EmailAddress]
    [StringLength(100)]
    public string Email { get; set; } = string.Empty;

    public bool IsAdmin { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}