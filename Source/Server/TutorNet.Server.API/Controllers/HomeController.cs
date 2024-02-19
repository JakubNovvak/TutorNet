using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Formats.Asn1;
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
            _repo = repo;
            _mapper = mapper;
        }

        //Probably unnecessary
        [HttpGet]
        public ActionResult<IEnumerable<CalendarEntryReadDto>> GetInformations()
        {
            Console.WriteLine(">[HomeCtrl] Testing initial HomeController...");

            var CalendarEntriesReadDto = _mapper.Map<IEnumerable<CalendarEntryReadDto>>(_repo.GetAllCalendarEntries(1, 19, 2));

            return Ok(CalendarEntriesReadDto);
        }

        //Caution: Since there is only one Tutor in DB (and probably will be only one) there is no need for "tutorId"
        [HttpGet("{tutorId}", Name = "GetCalendarEntriesByTutorId")]
        public ActionResult<IEnumerable<CalendarEntryReadDto>> GetCalendarEntriesByTutorId(int tutorId)
        {
            Console.WriteLine(">[HomeCtrl] Testing initial HomeController...");

            var CalendarEntriesReadDto = _mapper.Map<IEnumerable<CalendarEntryReadDto>>(_repo.GetCalendarEntriesByTutorId(tutorId));

            return Ok(CalendarEntriesReadDto);
        }

        [HttpPost]
        public ActionResult<CalendarEntryReadDto> CreateCalendarEntry(CalendarEntryCreateDto calendarEntryReadDto)
        {
            if (calendarEntryReadDto == null)
                return NotFound();

            if(!_repo.DoesTutorExists(calendarEntryReadDto.TutorId))
                return NotFound();

            var createdCalendarEntry = _mapper.Map<CalendarEntry>(calendarEntryReadDto);

            //createdCalendarEntry.Tutor = _repo.GetTutorById(createdCalendarEntry.TutorId);

            try
            {
                _repo.CreateCalendarEntry(createdCalendarEntry);
                _repo.SaveChanges();
            }
            catch (DbUpdateException ex)
            {
                Console.WriteLine($">[DBErr] There was an error with adding new Calendar Entry: {ex.Message}");
                return NotFound();
            }

            var createdCalendarEntryReadDto = _mapper.Map<CalendarEntryReadDto>(createdCalendarEntry);

            return Ok();
        }
    }
}
