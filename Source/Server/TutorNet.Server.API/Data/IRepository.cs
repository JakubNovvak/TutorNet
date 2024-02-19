using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Data
{
    public interface IRepository
    {
        bool SaveChanges();
        //Caution: By default, there is only one Tutor in the database
        IEnumerable<CalendarEntry> GetAllCalendarEntries(int todaysDay, int todaysMonth);
        CalendarEntry? GetCalendarEntry(int id);
        void CreateCalendarEntry(CalendarEntry entry);
    }
}
