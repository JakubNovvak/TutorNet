using Microsoft.AspNetCore.Mvc;

namespace TutorNet.Server.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        public HomeController()
        {
            
        }

        [HttpGet]
        public ActionResult GetInformations()
        {
            Console.WriteLine(">[HomeCtrl] Testing initial HomeController...");


            //Ok() - 200, NoContent() - 204, NotFound() - 404 
            return Ok();
        }
    }
}
