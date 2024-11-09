using APIMap.Helpers;
using APIMap.Models.DTO;
using APIMap.Models.Entities;
using APIMap.Models.Validators;
using APIMap.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIMap.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UsuarioController : ControllerBase
	{
		private readonly UsuarioRepository repository;

		public UsuarioController(UsuarioRepository repository)
        {
			this.repository = repository;
		}

		[HttpPost]
		public IActionResult Post(UsuarioDTO dto)
		{
			UsuarioValidator validator = new();
			var resultado = validator.Validate(dto);
            if (resultado.IsValid)
            {
				var encrypt = Encriptacion.StringToSHA512(dto.Password);
				Usuario usuario = new Usuario()
				{
					Id = 0,
                    Nombreusuario = dto.Username,
					Contraseña = encrypt
				};
				repository.Insert(usuario);
				return Ok(usuario);
            }
			return BadRequest(resultado.Errors.Select(x => x.ErrorMessage));
        }

		[HttpGet]
		public IActionResult GetAll()
		{
			var usuarios = repository.GetAll().Select(x => new UsuarioDTO()
			{
				Id = x.Id,
				Username = x.Nombreusuario,
				Password = x.Contraseña
			}).ToList();
			return Ok(usuarios);
		}

		[HttpGet("usuario/{id}")]
		public IActionResult GetUsuario(int id)
		{
			var usuario = repository.Get(id);
			if (usuario == null)
			{
				return NotFound();
			}
			var dto = new UsuarioDTO()
			{
				Id=usuario.Id,
				Username = usuario.Nombreusuario,
				Password = usuario.Contraseña
			};
			return Ok(dto);
		}

		[HttpPut]
		public IActionResult Put(UsuarioDTO dto)
		{
			UsuarioValidator validator = new();
			var result = validator.Validate(dto);
			if (result.IsValid)
			{
				var user = repository.Get(dto.Id);
				if (user == null)
				{
					return NotFound();
				}
				else
				{
					user.Nombreusuario = dto.Username;
					user.Contraseña = dto.Password;
					repository.Update(user);
					return Ok();
				}
			}
			return BadRequest(result.Errors.Select(x => x.ErrorMessage));
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			var user = repository.Get(id);
			if (user == null)
			{
				return NotFound();
			}
			repository.Delete(user);
			return Ok();
		}
    }
}
