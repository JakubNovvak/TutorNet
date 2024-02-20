namespace TutorNet.Server.API.Models
{
    public class TutorReadDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Email { get; set; }
        public string? Subject { get; set; }
        public int Pricing { get; set; }
    }
}
