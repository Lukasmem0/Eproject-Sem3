using System.ComponentModel.DataAnnotations;

namespace StarSecurity.Web.Models.ViewModels;

public class EmployeeViewModel
{
    public int Id { get; set; }

    [Required]
    [Display(Name = "Full Name")]
    public string Name { get; set; } = string.Empty;

    [Required]
    [Display(Name = "Address")]
    public string Address { get; set; } = string.Empty;

    [Required]
    [Phone]
    [Display(Name = "Contact Number")]
    public string Contact { get; set; } = string.Empty;

    [Required]
    [Display(Name = "Education")]
    public string Education { get; set; } = string.Empty;

    [Required]
    [Display(Name = "Employee Code")]
    public string EmployeeCode { get; set; } = string.Empty;

    [Required]
    [Display(Name = "Department")]
    public string Department { get; set; } = string.Empty;

    [Required]
    [Display(Name = "Role")]
    public string Role { get; set; } = string.Empty;

    [Required]
    [Display(Name = "Grade")]
    public string Grade { get; set; } = string.Empty;

    [Required]
    [Display(Name = "Current Client")]
    public string Client { get; set; } = string.Empty;

    [Display(Name = "Achievements")]
    public string? Achievements { get; set; }

    [Required]
    [EmailAddress]
    [Display(Name = "Email")]
    public string Email { get; set; } = string.Empty;

    [Display(Name = "Is Administrator")]
    public bool IsAdmin { get; set; }
}