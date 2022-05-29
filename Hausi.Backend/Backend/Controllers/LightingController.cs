using Backend.Model;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("[Controller]")]
public class LightingController : ControllerBase
{
    [HttpGet(Name = "GetLamps")]
    public Lamp[] GetLamps()
    {
        return Enumerable.Range(1, 10).Select(index => new Lamp()
            {
                Id = index,
                State = index < 5 ? true : false,
                Name = $"TestLamp{index}",
            })
            .ToArray();
    }
    // [HttpGet(Name = "GetLamp")]
    // public Lamp GetLamp()
    // {
    //     return new Lamp
    //     {
    //         Id = 1,
    //         State = true,
    //         Name = $"TestLamp{1}",
    //     };
    //     
    // }
}