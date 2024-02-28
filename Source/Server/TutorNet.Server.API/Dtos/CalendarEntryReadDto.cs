using System.ComponentModel.DataAnnotations;
using static TutorNet.Server.API.Models.CalendarEntryTypes;

namespace TutorNet.Server.API.Dtos
{
    public class CalendarEntryReadDto
    {
        public int Id { get; set; }
        public CalendarEntryType CalendarEntryType { get; set; }
        public bool IsAccepted { get; set; }
        public DateTime ReservationDate { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public string? MaterialRange { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ReservationComment { get; set; }
        public int TutorId { get; set; }
    }
}
