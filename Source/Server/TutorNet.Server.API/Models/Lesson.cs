namespace TutorNet.Server.API.Models
{
    public class Lesson
    {
        public int Id { get; set; }
        public DateTime ReservationDate { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public int PhoneNumber { get; set; }
        public string? ReservationComment { get; set; }
        public int TutorId { get; set; }
    }
}
