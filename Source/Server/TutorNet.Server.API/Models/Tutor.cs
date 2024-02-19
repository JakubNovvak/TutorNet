namespace TutorNet.Server.API.Models
{
    public class Tutor
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Email { get; set; }
        public string? Subject { get; set; }
        public int Pricing { get; set; }
        public ICollection<CalendarEntry>? CalendarEntries { get; set; } = new List<CalendarEntry>();
    }
}
