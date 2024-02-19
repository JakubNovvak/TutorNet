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
            if (dbContext == null)
                throw new ArgumentNullException(nameof(dbContext));
        }

        private static void SeedDataDevelopment(AppDbContext? dbContext)
        {
            if (dbContext == null)
                throw new ArgumentNullException(nameof(dbContext));

            if (!dbContext.Lessons.Any())
            {
                //TODO: Implement database seeding
            }
            else
                Console.WriteLine(">[DbSeed] Lessons Table already has data.");

            if (!dbContext.Tutors.Any())
            {
                Console.WriteLine(">[DbSeed] Seeding Data...");
                //TODO: Implement database seeding
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
