using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Formats.Asn1;
using System.Net.WebSockets;
using TutorNet.Server.API.Data;
using TutorNet.Server.API.Dtos;
using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IRepository _repo;
        private readonly IMapper _mapper;

        public HomeController(IRepository repo, IMapper mapper)
        {
            //Caution: All repo methods return Dates in LocalTime
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TutorReadDto>> GetAllTutors()
        {
            if (_repo.GetAllTutors().IsNullOrEmpty())
                return NotFound("There are no Tutors to return.");

            var tutorsReadDto = _mapper.Map<IEnumerable<TutorReadDto>>(_repo.GetAllTutors());

            return Ok(tutorsReadDto);
        }

        //Caution: Since there is only one Tutor in DB (and probably will be only one) there is actually no need for a "tutorId"
        [HttpGet("{tutorId}", Name = "GetCalendarEntriesByTutorId")]
        public ActionResult<IEnumerable<CalendarEntryReadDto>> GetCalendarEntriesByTutorId(int tutorId)
        {
            if(_repo.GetCalendarEntriesByTutorId(tutorId) == null)
                return NotFound($"Tutor with an Id {tutorId} was not found.");

            var CalendarEntriesReadDto = _mapper.Map<IEnumerable<CalendarEntryReadDto>>(_repo.GetCalendarEntriesByTutorId(tutorId));

            return Ok(CalendarEntriesReadDto);
        }

        [HttpGet("{tutorId}/{calendarEntryId}", Name = "GetCalendarEntryById")]
        public ActionResult<CalendarEntryReadDto> GetCalendarEntryById(int tutorId, int calendarEntryId)
        {
            if(!_repo.DoesTutorExists(tutorId))
                return NotFound($"Tutor with an Id {tutorId} does not exist.");

            var searchedCalendarEntry = _repo.GetCalendarEntry(tutorId, calendarEntryId);

            if(searchedCalendarEntry == null)
                return NotFound($"There was not found Calendar Entry associated with tutorId {tutorId} or CalendarEntryId {calendarEntryId}.");

            var searchedCalendarEntryReadDto = _mapper.Map<CalendarEntryReadDto>(searchedCalendarEntry);

            return Ok(searchedCalendarEntryReadDto);
        }

        [HttpGet("reservation/calendar/{tutorId}", Name = "GetArrayOfCalendarEntries")]
        public ActionResult<bool[][]> GetArrayOfCalendarEntries(int tutorId)
        {
            bool[][] monthArray = new bool[31][];

            for (int i = 0; i < 31; i++)
                monthArray[i] = new bool[24];

            foreach (bool[] innerTable in monthArray)
                Array.Fill(innerTable, false);

            if (_repo.GetCalendarEntriesBetween(tutorId, DateTime.Now, DateTime.Now.AddDays(31)) == null)
                return Ok(monthArray);

            //Warning: "GetCalendaerEntriesBetween" returns dates in Local Time, not UTC.
            var calendarEntriesBetween = _repo.GetCalendarEntriesBetween(tutorId, DateTime.Now, DateTime.Now.AddDays(31))!;

            int hourArrayIndex;
            var datePresentDay = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0);
            foreach (var calendarEntry in calendarEntriesBetween)
            {
                //Caution: Since Array holds hours in range of 0-23, index is an exact hour returned by DateTime.Hour
                hourArrayIndex = calendarEntry.ReservationDate.Hour;
                var calendarEntryDay = new DateTime(
                    calendarEntry.ReservationDate.Year, 
                    calendarEntry.ReservationDate.Month, 
                    calendarEntry.ReservationDate.Day, 
                    0, 0, 0);

                //Caution: Yearly time shift doesn't affect Substract
                int dayArrayIndex = calendarEntryDay.Subtract(datePresentDay).Days;

                monthArray[dayArrayIndex][hourArrayIndex] = true;
            }

            return Ok(monthArray);
        }

        [HttpPost]
        public ActionResult<CalendarEntryReadDto> CreateCalendarEntry(CalendarEntryCreateDto calendarEntryReadDto)
        {
            if (calendarEntryReadDto == null)
                return NotFound();

            if(!_repo.DoesTutorExists(calendarEntryReadDto.TutorId))
                return NotFound($"Tutor with an Id {calendarEntryReadDto.TutorId} does not exists.");

            var createdCalendarEntry = _mapper.Map<CalendarEntry>(calendarEntryReadDto);

            try
            {
                _repo.CreateCalendarEntry(createdCalendarEntry);
                _repo.SaveChanges();
            }
            catch (DbUpdateException ex)
            {
                Console.WriteLine($">[DBErr] There was an error with adding new Calendar Entry: {ex.Message}");
                return NotFound("There was an error with adding new Calendar Entry.");
            }

            var createdCalendarEntryReadDto = _mapper.Map<CalendarEntryReadDto>(createdCalendarEntry);
            Console.WriteLine($"<[POST] Regular: {createdCalendarEntryReadDto.ReservationDate}, ToLocalTime: {createdCalendarEntryReadDto.ReservationDate.ToLocalTime()}, ToUTC: {createdCalendarEntryReadDto.ReservationDate.ToUniversalTime()}");

            return CreatedAtRoute(nameof(GetCalendarEntryById), 
                new { tutorId = calendarEntryReadDto.TutorId, calendarEntryId = createdCalendarEntryReadDto.Id}, 
                createdCalendarEntryReadDto);
        }
    }
}
