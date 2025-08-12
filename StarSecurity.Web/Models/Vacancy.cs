using System.ComponentModel.DataAnnotations;

namespace StarSecurity.Web.Models;

public class Vacancy
{
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Position { get; set; } = string.Empty;

    [Required]
    [StringLength(50)]
    public string Department { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string Location { get; set; } = string.Empty;

    [Required]
    public string Requirements { get; set; } = string.Empty;

    [Required]
    [StringLength(1000)]
    public string Description { get; set; } = string.Empty;

    public DateTime PostedDate { get; set; } = DateTime.UtcNow;

    [Required]
    public VacancyStatus Status { get; set; } = VacancyStatus.Open;

    public DateTime? UpdatedAt { get; set; }
}

public enum VacancyStatus
{
    Open,
    Filled,
    Closed
}