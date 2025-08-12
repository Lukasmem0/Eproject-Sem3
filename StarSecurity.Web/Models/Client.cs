using System.ComponentModel.DataAnnotations;

namespace StarSecurity.Web.Models;

public class Client
{
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string Services { get; set; } = string.Empty;

    [Required]
    public int StaffAssigned { get; set; }

    [Required]
    [StringLength(100)]
    public string ContactPerson { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string Location { get; set; } = string.Empty;

    [StringLength(20)]
    public string? ContactNumber { get; set; }

    [EmailAddress]
    [StringLength(100)]
    public string? Email { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}