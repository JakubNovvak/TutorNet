using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Data
{
    public interface IRepository
    {
        bool SaveChanges();
        /// <summary>
        ///Caution: By default, there is only one Tutor in the database.
        /// </summary>
        Tutor? GetTutorById(int id);
        /// <summary>
        ///Caution: By default, there is only one Tutor in the database.
        /// </summary>
        bool DoesTutorExists(int id);
        /// <summary>
        ///Caution: By default, there is only one Tutor in the database.
        /// </summary>
        IEnumerable<Tutor> GetAllTutors();
        /// <summary>
        /// Caution: Returns Calendar Entry with LocalTime Reservation Date.
        /// </summary>
        CalendarEntry? GetCalendarEntry(int tutorId, int calendarEntryId);
        /// <summary>
        /// Caution: Creates Calendar Entry with UniversalTime Reservation date.
        /// </summary>
        void CreateCalendarEntry(CalendarEntry entry);
        /// <summary>
        /// Caution: Returns list of Calendar Entries with LocalTime Reservation Date.
        /// </summary>
        IEnumerable<CalendarEntry>? GetCalendarEntriesByTutorId(int id);
        /// <summary>
        /// Caution: Returns list of Calendar Entries with LocalTime Reservation Date.
        /// </summary>
        IEnumerable<CalendarEntry> GetAllCalendarEntries(int id, int todaysDay, int todaysMonth);
        /// <summary>
        /// Caution: Returns list of Calendar Entries with LocalTime Reservation Date.
        /// </summary>
        IEnumerable<CalendarEntry>? GetCalendarEntriesBetween(int tutorId, DateTime startingLocalDate, DateTime endingLocalDate);
    }
}
