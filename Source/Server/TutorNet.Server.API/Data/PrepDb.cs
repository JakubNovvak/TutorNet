using System.Diagnostics.Eventing.Reader;
using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Data
{
    public static class PrepDb
    {
        public static void PrepPopulation(IApplicationBuilder app, bool isProduction)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                if (isProduction)
                    SeedDataProduction(serviceScope.ServiceProvider.GetService<AppDbContext>());
                else
                    SeedDataDevelopment(serviceScope.ServiceProvider.GetService<AppDbContext>());
            }
        }

        private static void SeedDataProduction(AppDbContext? dbContext)
        {
            //TODO: Implement SQL Server Datbase

            if (dbContext == null)
                throw new ArgumentNullException(nameof(dbContext));
        }

        private static void SeedDataDevelopment(AppDbContext? dbContext)
        {
            if (dbContext == null)
                throw new ArgumentNullException(nameof(dbContext));

            if (!dbContext.CalendarEntries.Any())
            {
                //TODO: Implement database seeding with Calendar Entires
                dbContext.Add(
                    new CalendarEntry()
{
                        CalendarEntryType = CalendarEntryTypes.CalendarEntryType.Lesson, IsAccepted = true,
                        ReservationDate = new DateTime(2024, 02, 19, 15, 00, 00),
                        Name = "Jan Kowalski", Email = "jan@wp.pl", Address = "Test, Testowa 1",
                        MaterialRange = "Other", PhoneNumber = 123456789,
                        ReservationComment = "Panie Rafale, mam problem z ułamkami pomocy ://",
                        TutorId = 1
                });

                dbContext.SaveChanges();
            }
            else
                Console.WriteLine(">[DbSeed] Lessons Table already has data.");

            if (!dbContext.Tutors.Any())
            {
                Console.WriteLine(">[DbSeed] Seeding Data...");

                dbContext.AddRange(
                    new Tutor() { Name = "Jan", Surname = "Kowalski", Email = "jankowalski@test.pl", Subject = "Matematyka", Pricing = 50 }
                    );

                dbContext.SaveChanges();
            }
            else
                Console.WriteLine(">[DbSeed] Tutors Table already has data.");
        }
    }
}
