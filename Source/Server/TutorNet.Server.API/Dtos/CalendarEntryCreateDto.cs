using System.ComponentModel.DataAnnotations;
using static TutorNet.Server.API.Models.CalendarEntryTypes;

namespace TutorNet.Server.API.Dtos
{
    public class CalendarEntryCreateDto
    {
        [Required]
        public CalendarEntryType CalendarEntryType { get; set; }
        [Required]
        public bool IsAccepted { get; set; }
        [Required]
        public DateTime ReservationDate { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Address { get; set; }
        [Required]
        public string? MaterialRange { get; set; }
        [Required]
        public string? PhoneNumber { get; set; }
        public string? ReservationComment { get; set; }
        [Required]
        public int TutorId { get; set; }
    }
}
