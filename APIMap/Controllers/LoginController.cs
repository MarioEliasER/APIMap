using APIMap.Helpers;
using APIMap.Models.DTO;
using APIMap.Models.Validators;
using APIMap.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace APIMap.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly UsuarioRepository repository;
        private readonly JwtHelper jwthelper;

        public LoginController(UsuarioRepository repo, JwtHelper helper)
        {
            repository = repo;
            jwthelper = helper;
        }

        //[HttpPost]
        //public IActionResult Login(LoginDTO dto)
        //{
        //    LoginValidator validator = new LoginValidator();
        //    var result = validator.Validate(dto);
        //    if (result.IsValid)
        //    {
        //        //var encrypt = Encriptacion.StringToSHA512(dto.Password);
        //        var us = repository.GetAll().FirstOrDefault(x => x.Nombreusuario == dto.Username && x.Contraseña == encrypt);
        //        if (us == null)
        //        {
        //            return Unauthorized();
        //        }

        //        var token = jwthelper.GetToken(us.Nombreusuario, us.Id, new List<Claim> { });
        //    }
        //    return BadRequest(result.Errors.Select(x => x.ErrorMessage));
        //}
    }
}
