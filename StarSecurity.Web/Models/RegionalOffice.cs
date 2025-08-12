using System.ComponentModel.DataAnnotations;

namespace StarSecurity.Web.Models;

public class RegionalOffice
{
    public int Id { get; set; }

    [Required]
    [StringLength(50)]
    public string Region { get; set; } = string.Empty;

    [Required]
    [StringLength(200)]
    public string Address { get; set; } = string.Empty;

    [Required]
    [Phone]
    [StringLength(20)]
    public string Contact { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string ContactPerson { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [StringLength(100)]
    public string Email { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}