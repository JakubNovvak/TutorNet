using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Data
{
    public interface IRepository
    {
        //Caution: By default, there is only one Tutor in the database
        bool SaveChanges();
        //Tutor Functions
        Tutor? GetTutorById(int id);
        bool DoesTutorExists(int id);
        IEnumerable<Tutor> GetAllTutors();

        //Tutor CalendarFunctions
        CalendarEntry? GetCalendarEntry(int tutorId, int calendarEntryId);
        void CreateCalendarEntry(CalendarEntry entry);
        IEnumerable<CalendarEntry>? GetCalendarEntriesByTutorId(int id);
        IEnumerable<CalendarEntry> GetAllCalendarEntries(int id, int todaysDay, int todaysMonth);
        IEnumerable<CalendarEntry>? GetCalendaerEntriesBetween(int tutorId, DateTime startingDate, DateTime endingDate);
    }
}
