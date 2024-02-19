using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Data
{
    public interface IRepository
    {
        bool SaveChanges();
        //Caution: By default, there is only one Tutor in the database
        IEnumerable<CalendarEntry> GetAllCalendarEntries(int id, int todaysDay, int todaysMonth);
        CalendarEntry? GetCalendarEntry(int id);
        Tutor? GetTutorById(int id);
        IEnumerable<CalendarEntry> GetCalendarEntriesByTutorId(int id);
        void CreateCalendarEntry(CalendarEntry entry);
        bool DoesTutorExists(int id);
    }
}
