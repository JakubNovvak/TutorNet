using Microsoft.EntityFrameworkCore;
using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Data
{
    public class Repository : IRepository
    {
        private readonly AppDbContext _dbContext;

        public Repository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void CreateCalendarEntry(CalendarEntry entry)
        {
            if (entry == null)
                throw new DbUpdateException();

            _dbContext.CalendarEntries.Add(entry);
        }

        public IEnumerable<CalendarEntry> GetAllCalendarEntries(int todaysDay, int todaysMonth)
        {
            if(!_dbContext.CalendarEntries.Any())
                return new List<CalendarEntry>();

            //TODO: Return only entries, which are between ThisMonth::ThisDay -> ThisMonth+1::ThisDay

            List<CalendarEntry> calendarEntries = _dbContext.CalendarEntries.Where(entry => 
                (entry.ReservationDate.Month == todaysMonth || entry.ReservationDate.Month == todaysMonth + 1)
            ).ToList();

            throw new NotImplementedException();
        }

        public CalendarEntry? GetCalendarEntry(int id)
        {
            CalendarEntry? calendarEntry = _dbContext.CalendarEntries.FirstOrDefault(entry => entry.Id == id);

            return calendarEntry;
        }

        public bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }
    }
}
