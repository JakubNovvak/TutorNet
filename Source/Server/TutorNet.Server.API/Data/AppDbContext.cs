using Microsoft.EntityFrameworkCore;
using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CalendarEntry>()
                .Property(e => e.CalendarEntryType)
                .HasConversion<string>();
        }

        public DbSet<Tutor> Tutors { get; set; }
        public DbSet<CalendarEntry> CalendarEntries { get; set; }
    }
}
