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

        public bool DoesTutorExists(int id)
        {
            if(_dbContext.Tutors.FirstOrDefault(tutor => tutor.Id == id) != null)
                return true;

            return false;
        }

        public IEnumerable<CalendarEntry> GetAllCalendarEntries(int id, int todaysDay, int todaysMonth)
        {
            //Caution: By default there is only one Tutor in the database

            if(!_dbContext.CalendarEntries.Any())
                return new List<CalendarEntry>();

            //TODO: Return only entries, which are between ThisMonth::ThisDay -> ThisMonth+1::ThisDay

            List<CalendarEntry> calendarEntries = _dbContext.CalendarEntries.Where(entry => 
                (entry.ReservationDate.Month == todaysMonth || entry.ReservationDate.Month == todaysMonth + 1)
            ).ToList();

            return calendarEntries;
        }

        public IEnumerable<Tutor> GetAllTutors()
        {
            //Caution: empty or null validation should be done at the usege point
            return _dbContext.Tutors.ToList();
        }

        public IEnumerable<CalendarEntry>? GetCalendarEntriesByTutorId(int id)
        {
            if (_dbContext.Tutors.FirstOrDefault(tutor => tutor.Id == id) == null)
                return null;

            var tutorCalendarEntries = _dbContext.CalendarEntries.Where(entry => entry.TutorId == id).ToList();

            return tutorCalendarEntries;
        }

        public CalendarEntry? GetCalendarEntry(int tutorId, int calendarEntryId)
        {
            if (!_dbContext.Tutors.Any() || !_dbContext.CalendarEntries.Any())
                return null;

            var foundCalendarEntry = _dbContext.CalendarEntries.FirstOrDefault(entry => entry.TutorId == tutorId && entry.Id == calendarEntryId);

            return foundCalendarEntry;
        }

        public Tutor? GetTutorById(int id)
        {
            if (!_dbContext.Tutors.Any())
                return null;

            var searchedTutor = _dbContext.Tutors.FirstOrDefault(t => t.Id == id);

            return searchedTutor;
        }

        public bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }
    }
}
