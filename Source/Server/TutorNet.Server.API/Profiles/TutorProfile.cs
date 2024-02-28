using AutoMapper;
using TutorNet.Server.API.Dtos;
using TutorNet.Server.API.Models;

namespace TutorNet.Server.API.Profiles
{
    public class TutorProfile: Profile
    {
        public TutorProfile() 
        {
            CreateMap<Tutor, TutorReadDto>();
        }
        
    }
}
