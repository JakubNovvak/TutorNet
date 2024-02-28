using AutoMapper;
using TutorNet.Server.API.Dtos;
using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Profiles
{
    public class CalendarEntryProfile: Profile
    {
        public CalendarEntryProfile()
        {
            CreateMap<CalendarEntry, CalendarEntryReadDto>();
            CreateMap<CalendarEntryCreateDto, CalendarEntry>();
        }
    }
}
