using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using System.Reflection.Metadata;
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
            modelBuilder.Entity<Tutor>()
                .HasMany(t => t.CalendarEntries)
                .WithOne(c => c.Tutor)
                .HasForeignKey(c => c.TutorId)
                .IsRequired(true);
        }

        public DbSet<Tutor> Tutors { get; set; }
        public DbSet<CalendarEntry> CalendarEntries { get; set; }
    }
}
